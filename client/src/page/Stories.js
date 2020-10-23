import React, { useState,useEffect,useReducer } from 'react';
import List from '../component/List';
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
const useSemiPersistentState = (key, initialState) => {

    const [value, setValue] = React.useState(
      localStorage.getItem(key) || initialState
    );
  
    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);
  
    return [value, setValue];
};
const storiesReducer = (state, action) => {
    switch (action.type) {
      case 'STORIES_FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case 'STORIES_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'STORIES_FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case 'REMOVE_STORY':
        return {
          ...state,
          data: state.data.filter(
            story => action.payload.objectID !== story.objectID
          ),
        };
      default:
        throw new Error();
    }
  };
function Stories(){
    const [searchTerm, setSearchTerm] = useSemiPersistentState(
        'search',
        'React'
      );
    const [stories, dispatchStories] = useReducer(
        storiesReducer,
        { data: [], isLoading: false, isError: false }
      );
      useEffect(() => {
            dispatchStories({ type: 'STORIES_FETCH_INIT' });
            fetch(`${API_ENDPOINT}react`)
            .then(response => response.json())
            .then(result => {
            dispatchStories({
                type: 'STORIES_FETCH_SUCCESS',
                payload: result.hits,
            });
            })
            .catch(() =>
            dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
            );

        }, []);
  
          const handleSearch = event => {
            setSearchTerm(event.target.value);
          };
          const handleRemoveStory = (item) => {
            dispatchStories({
              type: "REMOVE_STORY",
              payload: item
            });
          };
          const searchedStories = stories.data.filter(story =>
            story.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        
      return (<div>
          <h1>My Hacker Stories</h1>
          <List prop={searchedStories} onRemoveItem={handleRemoveStory} />

      </div>);


}
export default Stories;
