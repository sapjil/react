import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import DefaultLayout from 'Layout/DefaultLayout';
import Modal from 'Components/Modal';

import './Modal.scss';

const PortalSample = (props) => {
  // const reference = []
  // const explain = []

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSizeSet, setModalSizeSet] = useState('small');

  const modalSize = ['small', 'medium', 'large'];

  return (
    <DefaultLayout {...props}>
      <div>
        modalSize
        {modalSize.map((item, index) => (
          <React.Fragment key={index}>
            <button onClick={() => setModalSizeSet(item)}>{item}</button>
          </React.Fragment>
        ))}
      </div>
      <br />
      <button onClick={() => setModalOpen(true)}>
        Modal Trigger {modalSizeSet && `: ${modalSizeSet}`}
      </button>
      {modalOpen === true &&
        createPortal(
          <Modal setModalOpen={setModalOpen} modalSizeSet={modalSizeSet} />,
          document.getElementById('modal-root'),
        )}
    </DefaultLayout>
  );
};

export default PortalSample;
