import React from 'react';
import logo from './images/logo.svg';
import Menu from './component/menu';
import List from './component/List';
import LoggingButton from './component/LoggingButton';
import Router from './router';
import styles from './scss/style.scss'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const handleRemoveStory = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>  
      </header>
      <div style={{ display: 'flex' }}>
        <span style={{ width: '40%' }}>Title</span>
        <span style={{ width: '30%' }}>Author</span>
        <span style={{ width: '10%' }}>Comments</span>
        <span style={{ width: '10%' }}>Points</span>
        <span style={{ width: '10%' }}>Actions</span>
      </div>
       <List list={stories} onRemoveItem={handleRemoveStory}></List>
       <LoggingButton ></LoggingButton>
       <Router></Router>
    </div>
  );
}

export default App;
