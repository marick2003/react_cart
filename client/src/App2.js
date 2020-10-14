import React, { useState,useEffect,useReducer } from 'react';
import logo from './images/logo.svg';
import Menu from './component/menu';
import List from './component/List';
import Count from './component/Count';
import LoggingButton from './component/LoggingButton';
import Search from './component/Search';
import Router from './router';
import styles from './scss/style.scss'
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
      num_comments: 2,
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
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchArray, setSearchArray] = React.useState(stories);
 
  

  let searchedStories = (asd) =>{
    setSearchArray(prev=> [...prev, ...stories]) ;
  }

  //return story.title.toLowerCase().includes(searchTerm.toLowerCase())
  const handleRemoveStory = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearch = event => {
    //setSearchTerm(event.target.value);
    console.log(event.target.value.toLowerCase())
    setSearchArray(prev=> {
      [...stories.filter(story=>story.title.toLowerCase().includes(event.target.value.toLowerCase()))]
    }
    );
      //[ story.title.toLowerCase().includes(event.target.value.toLowerCase()) ]
  };
  function handleClick(asd){
    setSearchArray(prev=> [..._.sortBy(prev, asd)]);
  }
  console.log(searchTerm);

  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>  
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
