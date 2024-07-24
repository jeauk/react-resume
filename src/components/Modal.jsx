import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {/* 닫기 버튼 추가 */}
        <button className="close-button" onClick={handleClose}>닫기</button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
