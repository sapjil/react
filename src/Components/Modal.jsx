import React from 'react'
import Contents from './Contents';

const Modal = (props) => {
	const { setModalOpen, modalSizeSet, modalTitle } = props;

	const closeHandler = () => {
		setModalOpen(false)
	}

	return (
		<div className='modal-box'>
			<div className={`modal-container ${modalSizeSet}`}>
				<header className='modal-header'>
					{modalTitle ? modalTitle : 'Dummy Modal Header' }
				</header>
				<div className='modal-contents'>
					<Contents value='Modal Contents' />
				</div>
				<footer className='modal-footer'>Modal Footer</footer>
				<button onClick={closeHandler}>close</button>
			</div>
		</div>
	)
}

export default Modal
