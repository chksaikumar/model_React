import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <span className="header"></span>
        <div className="titleCloseBtn">
          <button onClick={setOpenModal}>X</button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Modal;
