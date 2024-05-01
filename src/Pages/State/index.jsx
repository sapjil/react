import React, { useEffect, useRef, useState } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import InputWrap from './components/InputWrap';
import InputWrapSecond from './components/InputWrapSecond';

// const mockDate = [
//   {
//     id: 0,
//     isDone: false,
//     content: 'React 공부',
//     date: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: 'Vue 공부',
//     date: new Date().getTime(),
//   },
// ];

const State = (props) => {
  //////////////////////////////////////////
  // const [todos, setTodos] = useState(mockDate);
  // const idRef = useRef(3);

  // const onCreate = (content) => {
  //   const newTodo = {
  //     id: idRef.current++,
  //     isDone: false,
  //     content: content,
  //     date: new Date().getTime(),
  //   };
  //   setTodos([newTodo, ...todos]);
  // };

  // const onUpdate = (targetId) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
  //     ),
  //   );
  // };

  // const onDelete = (targetId) => {
  //   setTodos(todos.filter((todo) => todo.id !== targetId));
  // };
  //////////////////////////////////////////

  //   const reference = [];
  //   const explain = [];

  const [inputValue, setInputValue] = useState('');
  const [listValue, setListValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputValueCheck = (e) => {
    let checkValue = e.target.value;
    setInputValue(checkValue);
  };

  const setValue = (e) => {
    setListValue(inputValue);
    setInputValue('');
    inputRef.current.value = '';
    inputRef.current.focus();
    console.log(e);
  };

  return (
    <DefaultLayout {...props}>
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
        <div style={{ display: 'flex', columnGap: '2rem' }}>
          <div>
            <InputWrap
              inputRef={inputRef}
              inputValue={inputValue}
              inputValueCheck={inputValueCheck}
              setValue={setValue}
            />
          </div>
          <div>
            <InputWrapSecond
              inputRef={inputRef}
              setInputValue={setInputValue}
              setValue={setValue}
            />
          </div>
          <div>
            <div>{inputValue && <p>{inputValue}</p>}</div>
            <ul>{listValue && <li>{listValue}</li>}</ul>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default State;
