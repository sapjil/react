import React from 'react';

const ModalFilter = (props) => {
  const { setModalOpen, modalSizeSet, modalTitle } = props;

  const closeHandler = () => {
    setModalOpen(false);
  };

  return (
    <div className='modal-box'>
      <div className='filter-box'>
        <div className={`filter-wrap ${modalSizeSet}`}>
          <header className='modal-header'>
            {modalTitle ? modalTitle : 'Dummy Modal Header'}
          </header>
          <div className='modal-contents'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non in
            fugiat eveniet. Delectus qui repellat iure. Vitae rerum voluptas
            officia laborum eos voluptates exercitationem, voluptate sequi ea
            beatae et fuga. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Non in fugiat eveniet. Delectus qui repellat iure. Vitae rerum
            voluptas officia laborum eos voluptates exercitationem, voluptate
            sequi ea beatae et fuga.
          </div>
          <footer className='modal-footer'>Modal Footer</footer>
          <button onClick={closeHandler}>close</button>
          <div className='filter'></div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilter;
