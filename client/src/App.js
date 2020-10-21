import React, { useState,useEffect,useReducer } from 'react';
import logo from './images/logo.svg';
import Menu from './component/menu';
import List from './component/List';
import Count from './component/Count';
import LoggingButton from './component/LoggingButton';
import Search from './component/Search';
import Router from './router';
import './scss/style.scss';
import { sortBy } from 'lodash';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const stories = [
    {
      title: 'React1',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux2',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 5,
      points: 5,
      objectID: 1,
    },
    {
      title: 'Redux3',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 4,
      points: 5,
      objectID: 2,
    },
  ];
  const [searchVlue,setSearchVlue]=React.useState();
  const [searchTerm, setSearchTerm] = React.useState(stories);
  const [searchArray, setSearchArray] = React.useState(stories);

  const handleRemoveStory = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearch = event => {
    //setSearchTerm(event.target.value);
    var _str=event.target.value.toLowerCase();
   
    setSearchArray( 
      // searchTerm.filter(function(story) { 
      //   console.log(_str);
      //   console.log(story.title.toLowerCase().includes(_str));
      //   return story.title.toLowerCase().includes(_str);
      // })
      _.filter(searchTerm, function(o) { return o.title.toLowerCase().includes(_str); })
      
    );
      //[  ]
  };
  function handleClick(asd){
    console.log(asd);
    setSearchArray(prev=> [..._.sortBy(prev, asd)]);
  }
  console.log(searchArray);

  return (
    <div className="App">
      <header className="App-header">
        <Menu ></Menu>  
      </header>
      <Search onSearch={handleSearch}></Search>
      <Count></Count>
      <div style={{ display: 'flex' }}>
        <span style={{ width: '40%' }}>Title</span>
        <span style={{ width: '30%' }}>Author</span>
        <span style={{ width: '10%' }}>Comments</span>
        <span style={{ width: '10%' }}>Points</span>
        <span style={{ width: '10%' }}>Actions</span>
      </div>
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
      </div>
       <List prop={searchArray} onRemoveItem={handleRemoveStory}></List>
      
       <LoggingButton ></LoggingButton>
       <Router></Router>

    </div>
  );
}

export default App;
