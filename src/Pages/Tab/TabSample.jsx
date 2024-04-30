import React, { useState } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import Contents from 'Components/Contents';

import './Tab.scss';

const TabSample = (props) => {
  // const reference = []
  // const explain = []

  const [now, setIndex] = useState(0);

  const data = [
    { id: 0, title: 'tab 1', content: <Contents value='tab 1' /> },
    { id: 1, title: 'tab 2', content: <Contents value='tab 2' /> },
    { id: 2, title: 'tab 3', content: <Contents value='tab 3' /> },
  ];

  return (
    <DefaultLayout {...props}>
      <section className='tab-container'>
        <div className='tab-menus'>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <button
                className={`tab-menu ${now === item.id ? 'active' : null}`}
                onClick={() => setIndex(item.id)}>
                {item.title}
              </button>
            </React.Fragment>
          ))}
        </div>
        {data
          .filter((item) => now === item.id)
          .map((item) => (
            <React.Fragment key={item.id}>
              <div className='tab-contents'>{item.content}</div>
            </React.Fragment>
          ))}
      </section>
    </DefaultLayout>
  );
};

export default TabSample;
