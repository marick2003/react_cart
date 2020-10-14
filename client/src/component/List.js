import React, { useState,useEffect } from 'react';
import Item from './Item';


function List({prop, onRemoveItem}){
  
  // const SORTS = {
  //   NONE: list => list,
  //   TITLE: list => sortBy(list.list, 'title'),
  //   AUTHOR: list => sortBy(list.list, 'author'),
  //   COMMENT: list => sortBy(list.list, 'num_comments').reverse(),
  //   POINT: list => sortBy(list.list, 'points').reverse(),
  // };
  // const [sort, setSort] = React.useState('NONE');
  // const handleSort = sortKey => {
  //   setSort(sortKey);
  // };
  const [lists, sortList] = useState(prop);
  useEffect(() => {
      
  }, [lists]);


  
  // const sortFunction = SORTS[sort];
  
  return (
  <div>
    
    <span>Actions</span>
    {
      prop.map(list => (
          <Item
            key={list.objectID}
            item={list}
            onRemoveItem={onRemoveItem}
          />
        ))
    }
  </div>
  
  );
}

export default List;