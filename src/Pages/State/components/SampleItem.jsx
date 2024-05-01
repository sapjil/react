import React from 'react';

const SampleItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteBtn = () => {
    onDelete(id);
  };

  return (
    <div className='TodoItem flex items-center mb-2 gap-2'>
      <input
        onChange={onChangeCheckBox}
        readOnly
        checked={isDone}
        type='checkbox'
        className='appearance-none rounded-md default:ring-2 checked:bg-blue-500 indeterminate:bg-gray-300 w-5 h-5'
      />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteBtn}>삭제</button>
    </div>
  );
};

export default SampleItem;
