import React, { useState } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import Modal from 'Components/Modal';

import './Modal.scss';

const ModalSample = (props) => {
  // const reference = []
  // const explain = []

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSizeSet, setModalSizeSet] = useState('medium');

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
      {modalOpen === true && (
        <Modal
          setModalOpen={setModalOpen}
          modalSizeSet={modalSizeSet}
          modalTitle='Custom Modal Header'
        />
      )}
    </DefaultLayout>
  );
};

export default ModalSample;
