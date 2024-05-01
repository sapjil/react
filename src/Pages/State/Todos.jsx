import React, { useRef, useState } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import SampleChild from './components/SampleChild';
import SampleList from './components/SampleList';

const mockDate = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'Vue 공부',
    date: new Date().getTime(),
  },
];

const Todos = (props) => {
  const [todos, setTodos] = useState(mockDate);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <DefaultLayout {...props}>
      <SampleChild onCreate={onCreate} />
      <SampleList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </DefaultLayout>
  );
};

export default Todos;
