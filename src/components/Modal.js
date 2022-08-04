import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DeleteModal from "./DeleteModal";

const Modal = ({ handlingData, closeModal }) => {
  console.log(handlingData);
  return (
    <div className="modal-background">
      <div className="modal p-3">
        <div className="modal-header">
          <span>
            <button>
              <AiOutlineCloseCircle onClick={closeModal} />
            </button>
          </span>
        </div>
        <div className="modal-body">
          <DeleteModal id={handlingData.id} closeModal={closeModal} />
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default Modal;
