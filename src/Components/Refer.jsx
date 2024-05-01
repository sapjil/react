import React from 'react';
import { Link } from 'react-router-dom';

const Refer = (props) => {
  const { reference } = props;
  return (
    <>
      <div className='info-wrap'>
        <h3>Reference</h3>
        <ul>
          {reference.map((item, index) => (
            <li key={index}>
              <Link to={item.link} target='_blank'>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Refer;
