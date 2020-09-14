import React from 'react';
import Item from './Item';
import { sortBy } from 'lodash';



function List(list,onRemoveItem){
  console.log(list.list);
const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list.list, 'title'),
  AUTHOR: list => sortBy(list.list, 'author'),
  COMMENT: list => sortBy(list.list, 'num_comments').reverse(),
  POINT: list => sortBy(list.list, 'points').reverse(),
};
  const [sort, setSort] = React.useState('NONE');
  // const handleSort = sortKey => {
  //   setSort(sortKey);
  // };

  function handleSort(sortKey){
   
   console.log(sortBy(sortedList, 'author'));

  }

  const sortFunction = SORTS[sort];
  const sortedList = list.list;
  console.log(sortedList);
  return (<div>
    <span>
      <button type="button" onClick={() => handleSort('TITLE')}>
        Title
      </button>
    </span>
    <span>
      <button type="button" onClick={() => handleSort('AUTHOR')}>
        Author
      </button>
    </span>
    <span>
      <button type="button" onClick={() => handleSort('COMMENT')}>
        Comments
      </button>
    </span>
    <span>
      <button type="button" onClick={() => handleSort('POINT')}>
        Points
      </button>
    </span>
    <span>Actions</span>
    {sortedList.map(list => (
        <Item
          key={list.objectID}
          item={list}
          onRemoveItem={onRemoveItem}
        />
      ))}
  </div>
  
  );
}

export default List;