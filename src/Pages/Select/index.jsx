import React, { useState } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';

import './Select.scss';
import uuid from 'react-uuid';

const TAG_LIST = [
  { id: 0, tag_text: 'item 1', checked: false },
  { id: 1, tag_text: 'item 2', checked: false },
  { id: 2, tag_text: 'item 3', checked: false },
  // { id: 3, tag_text: 'item 4' },
  // { id: 4, tag_text: 'item 5' },
];

const Select = (props) => {
  // const reference = []
  // const explain = []

  const [tagList] = useState(TAG_LIST);
  const [, setChoiceTagID] = useState(1);
  const [clickValue, setClickValue] = useState(false);
  const [isChecked, setIsChecked] = useState();
  // const [filterTag, setFilterTag] = useState([]);

  const clickTagBtn = (id) => {
    const newArry = Array(TAG_LIST.length).fill(false);
    newArry[id] = true;
    console.log(newArry);

    setChoiceTagID(id);
    setClickValue((prev) => !prev);
    setIsChecked((prev) => !prev);
    tagList[id].isChecked = !clickValue;
  };

  return (
    <DefaultLayout {...props}>
      <div>
        <ul className='tags-wrap'>
          {tagList.map((tag) => (
            <li className='tags-item' key={uuid()}>
              <button
                className={`tags-link ${isChecked ? 'tagOn' : ''}`}
                onClick={() => clickTagBtn(tag.id)}>
                {tag.tag_text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};

export default Select;
