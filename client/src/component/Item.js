import React from 'react';

function Item(data, onRemoveItem){
    console.log(data.item);
    return  <div style={{ display: 'flex' }}>
    <span style={{ width: '40%' }}>
      <a href={data.item.url}>{data.item.title}</a>
    </span>
    <span style={{ width: '30%' }}>{data.item.author}</span>
    <span style={{ width: '10%' }}>{data.item.num_comments}</span>
    <span style={{ width: '10%' }}>{data.item.points}</span>
    <span style={{ width: '10%' }}>
      <button type="button" onClick={() => onRemoveItem(data.item)}>
        Dismiss
      </button>
    </span>
  </div>;
}

export default Item;