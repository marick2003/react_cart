import React, { useState,useEffect } from 'react';
import Item from './Item';
import { sortBy } from 'lodash';

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
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  useEffect((e) => {
    //console.log(e);
  });

  function handleClick(asd) {
    
   //sortList(prev => [...sortBy(prev, asd)]);
    sortList(prev => sortBy(prev, asd));
  }

  // const sortFunction = SORTS[sort];
  
  return (
  <div>
    <span>
      <button type="button" onClick={() => handleClick('title')}>
        Title
      </button>
    </span>
    <span>
      <button type="button" onClick={() => handleClick('author')}>
        Author
      </button>
    </span>
    <span>
      <button type="button" onClick={() => handleClick('num_comments')}>
        Comments
      </button>
    </span>
    <span>
      <button type="button" onClick={() => handleClick('points')}>
        Points
      </button>
    </span> 
    <span>Actions</span>
    {
      lists.map(list => (
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