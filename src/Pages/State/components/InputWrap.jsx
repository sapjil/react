import React from 'react'

const InputWrap = ({inputRef, inputValueCheck, setValue}) => {

  return (
    <>
      <div className='input-wrap'>
        <label htmlFor='propsSample'>Props:</label>
        <input id='propsSample' type="text" ref={inputRef} onChange={inputValueCheck} />
        <button className='btn1' onClick={setValue}>btn1</button>
      </div>
    </>
  )
}

export default InputWrap
