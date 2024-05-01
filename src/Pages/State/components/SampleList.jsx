import React from 'react';
import SampleItem from './SampleItem';

const SampleList = ({ todos, onUpdate, onDelete }) => {
  // console.log(todos);
  return (
    <div>
      <div className='list-wrapper'>
        {todos.map((todo) => {
          return (
            <SampleItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SampleList;
