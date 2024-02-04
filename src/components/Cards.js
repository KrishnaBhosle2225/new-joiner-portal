import React from 'react';
import {data} from './data';
import Card from './Card';

function Cards() {
  return (
    <div className='container'>
      {data.map(({ id, title }) => (
        
        <Card key={id} title={title} />
      ))}
    </div>
  );
}

export default Cards;
