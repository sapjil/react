import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import dummy from './../../assets/sample.jpg';
import DefaultLayout from 'Layout/DefaultLayout';
import ModalFilter from 'Components/ModalFilter';

import './../Modal/Modal.scss';

const Images = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <DefaultLayout {...props}>
        <div className='flex flex-col gap-y-5 mb-4'>
          <div>
            <span>001: path</span>
            <img src='/sample.jpg' alt='' className='w-48' />
          </div>
          <div>
            <span>002: process.env.PUBLIC_URL</span>
            <img
              src={`${process.env.PUBLIC_URL}/sample.jpg`}
              alt=''
              className='w-48'
            />
          </div>
          <div>
            <span>003: import</span>
            <img src={dummy} alt='' className='w-48' />
          </div>
          <div>
            <span>004: background</span>
            <div
              style={{
                background: 'url(/sample.jpg) no-repeat 0 0/168px 168px',
              }}
              className='w-48 h-48'></div>
          </div>
        </div>
        <button onClick={() => setModalOpen(true)}>
          Modal Trigger(background filter)
        </button>
        {modalOpen === true &&
          createPortal(
            <ModalFilter setModalOpen={setModalOpen} modalSizeSet={'large'} />,
            document.getElementById('modal-root'),
          )}
      </DefaultLayout>
    </>
  );
};

export default Images;
