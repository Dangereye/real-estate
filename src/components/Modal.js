import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

const Modal = ({ toggle, text }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-icon'>
          <HiOutlineMail />
        </div>
        <p className='modal-text'>{text}</p>
        <button className='btn-secondary' onClick={toggle}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
