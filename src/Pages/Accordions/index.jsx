import React from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import AccordionComponent from './Accordion';
import AccordionTransition from './AccordionTransition';
import AccordionsNormal from './AccordionsNormal';

const Accordion = (props) => {
  return (
    <>
      <DefaultLayout {...props}>
        <div style={{ width: '300px' }}>
          <h3>
            CSS<small>(none react-transition-group)</small>
          </h3>
          <AccordionsNormal>
            <ul className='list-disc'>
              <li>sit amet consectetur adipisicing elit</li>
              <li>Ipsa consectetur laudantium</li>
              <li>aliquid? Consequatur maxime</li>
              <li>quos magnam illum ea ipsa laudantium recusandae</li>
            </ul>
          </AccordionsNormal>
          <AccordionsNormal>
            <ul className='list-disc'>
              <li>sit amet consectetur adipisicing elit</li>
              <li>Ipsa consectetur laudantium</li>
              <li>aliquid? Consequatur maxime</li>
              <li>quos magnam illum ea ipsa laudantium recusandae</li>
            </ul>
          </AccordionsNormal>

          <h3>CSSTransition</h3>
          <AccordionComponent>
            <ul className='list-disc'>
              <li>sit amet consectetur adipisicing elit</li>
              <li>Ipsa consectetur laudantium</li>
              <li>aliquid? Consequatur maxime</li>
              <li>quos magnam illum ea ipsa laudantium recusandae</li>
            </ul>
          </AccordionComponent>
          <AccordionComponent>
            <ul className='list-disc'>
              <li>sit amet consectetur adipisicing elit</li>
              <li>Ipsa consectetur laudantium</li>
              <li>aliquid? Consequatur maxime</li>
              <li>quos magnam illum ea ipsa laudantium recusandae</li>
            </ul>
          </AccordionComponent>

          <h3>Transition</h3>
          <AccordionTransition>
            <ul className='list-disc'>
              <li>sit amet consectetur adipisicing elit</li>
              <li>Ipsa consectetur laudantium</li>
              <li>sit amet consectetur adipisicing elit</li>
              <li>Ipsa consectetur laudantium</li>
              <li>aliquid? Consequatur maxime</li>
              <li>quos magnam illum ea ipsa laudantium recusandae</li>
            </ul>
          </AccordionTransition>
          <AccordionTransition>
            <ul className='list-disc'>
              <li>sit amet consectetur adipisicing elit</li>
              <li>Ipsa consectetur laudantium</li>
              <li>aliquid? Consequatur maxime</li>
              <li>quos magnam illum ea ipsa laudantium recusandae</li>
            </ul>
          </AccordionTransition>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Accordion;
