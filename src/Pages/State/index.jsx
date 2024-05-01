import React, { useEffect, useRef, useState } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import InputWrap from './components/InputWrap';
import InputWrapSecond from './components/InputWrapSecond';

const State = (props) => {
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
