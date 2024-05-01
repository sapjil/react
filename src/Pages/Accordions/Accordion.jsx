import Button from 'Components/Button';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const AccordionComponent = (props) => {
  const [isActive, setIsActive] = useState('');

  const toggleHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div className=''>
        <div className='flex justify-between items-center'>
          <h4 className='m-0'>Title</h4>
          <Button
            size='small'
            id='exam'
            onClick={() => toggleHandler()}
            className={`${isActive ? 'on' : ''}`}>
            {`${isActive ? 'close' : 'open'}`}
          </Button>
        </div>
        <div className={`trans ${isActive ? 'transhmax' : ''}`}>
          <CSSTransition timeout={0}>
            <div className='p-3 pl-5'>{props.children}</div>
          </CSSTransition>
        </div>
      </div>
    </>
  );
};

export default AccordionComponent;
