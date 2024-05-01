import React, { useRef, useState } from 'react';
import Button from 'Components/Button';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `max-height ${duration}ms ease-in-out`,
  opacity: 0,
  maxHeight: 0,
};

const transitionStyles = {
  entering: { opacity: 1, maxHeight: '50rem' },
  entered: { opacity: 1, maxHeight: '50rem' },
  exiting: { opacity: 0, maxHeight: '0rem' },
  exited: { opacity: 0, maxHeight: '0rem' },
};

const AccordionTransition = (props) => {
  const [inProp, setInProp] = useState();
  const nodeRef = useRef(null);
  const toggle = () => {
    setInProp((prev) => !prev);
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
            className={`${inProp ? 'on' : ''}`}>
            {`${inProp ? 'close' : 'open'}`}
          </Button>
        </div>
        <Transition
          in={inProp}
          timeout={duration}
          classNames={'accordion-wrapper'}>
          {(state) => (
            <div
              ref={nodeRef}
              style={{ ...defaultStyle, ...transitionStyles[state] }}>
              {props.children}
            </div>
          )}
        </Transition>
      </div>
    </>
  );
};

export default AccordionTransition;
