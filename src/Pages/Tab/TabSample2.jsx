import React, { useState } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import Contents from 'Components/Contents';

import './Tab.scss';

const TabSample2 = (props) => {
  // const reference = []
  // const explain = []

  const [now, setIndex] = useState(0);

  return (
    <DefaultLayout {...props}>
      <article className='tab-container'>
        <div className='tab-menus'>
          <button
            className={`tab-menu ${now === 0 && 'active'}`}
            onClick={() => setIndex(0)}>
            title1
          </button>
          <button
            className={`tab-menu ${now === 1 && 'active'}`}
            onClick={() => setIndex(1)}>
            title2
          </button>
        </div>
        <section className='tab-contents'>
          {now === 0 ? (
            <Contents value='content 1' />
          ) : (
            <Contents value='content 2' />
          )}
        </section>
      </article>
    </DefaultLayout>
  );
};

export default TabSample2;
