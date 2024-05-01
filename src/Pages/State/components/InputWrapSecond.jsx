import React, { useRef } from 'react'

const InputWrapSecond = ({setInputValue, inputRef, setValue}) => {

  const appendRef = useRef(inputRef);

  const setInputHandler = e => {
    setInputValue(e.target.value)
  }

  const setCheckValue = e => {
    setValue(e)
    console.log(e.target);
    appendRef.current.value = '';
    appendRef.current.focus();
  }

  return (
    <>
      <div className='input-wrap'>
        <label htmlFor='StatusSample'>State:</label>
        <input id='StatusSample' type="text" ref={appendRef} onChange={setInputHandler} />
        <button className='btn2' onClick={setCheckValue}>btn2</button>
      </div>
    </>
  )
}

export default InputWrapSecond
