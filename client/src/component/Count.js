import React, { useState,useEffect,useReducer } from 'react';
function Count(){
    const default_num=25;
    const initialState = {count: 0};
    function reducer(state, action) {
        switch (action.type) {
          case 'increment':
            return {count: state.count + 1};
          case 'decrement':
            return {count: state.count - 1};
          default:
            throw new Error();
        }
      }
    const [state, dispatch] = useReducer(reducer, initialState);
    ///useState 
    const [count, setCount] = useState(default_num);
      useEffect(() => {
        // 使用瀏覽器 API 更新文件標題
         document.title = `You clicked ${count} times`;
     });
    return <div>
        <p>You clicked {state.count} times</p>
        {/* <button onClick={() => setCount(count + 1)}>
          Click me
        </button> */}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>;
}


export default Count;