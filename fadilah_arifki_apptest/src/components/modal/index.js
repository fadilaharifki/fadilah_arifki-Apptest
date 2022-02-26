import React from 'react';
import Modal from 'react-modal';
import Close from '../icons/close';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function ModalComponent({ isOpen, setIsOpen, title, children }) {

    return (
        <div>
            <Modal
                isOpen={isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                <div className='flex flex-row justify-between'>
                    <h2>{title}</h2>
                    <button onClick={() => setIsOpen(false)}><Close /></button>
                </div>
                <div className='py-10'>{children}</div>
            </Modal>
        </div>
    );
}
