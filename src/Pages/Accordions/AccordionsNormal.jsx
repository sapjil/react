import React, { useState } from 'react';
import Button from 'Components/Button';

const AccordionsNormal = (props) => {
  const [isActive, setIsActive] = useState();

  const toggle = () => {
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
            onClick={() => toggle()}
            className={`${isActive ? 'on' : ''}`}>
            {`${isActive ? 'close' : 'open'}`}
          </Button>
        </div>
        <div className={`transcss ${isActive ? 'transcssmax' : ''}`}>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default AccordionsNormal;
