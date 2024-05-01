import React, { useRef, useState } from 'react';

const SampleChild = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  return (
    <>
      <div className='mb-3'>
        <div className='border-solid border border-blue-400 inline-block rounded-lg'>
          <input
            type='text'
            value={content}
            ref={contentRef}
            onKeyDown={onKeydown}
            onChange={onChangeContent}
            placeholder='placeholder'
            className='text-black p-4 border-none'
          />
          <button
            className='p-4 border-0 rounded-none border-blue-400 border-l'
            onClick={onSubmit}>
            button
          </button>
        </div>
      </div>
    </>
  );
};

export default SampleChild;
