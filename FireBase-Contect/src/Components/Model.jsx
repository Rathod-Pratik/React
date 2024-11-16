import { IoIosClose } from "react-icons/io";
import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-content-center absolute top-0 left-0 z-40 h-screen w-screen bg-gray-900 bg-opacity-50">
          <div className="flex flex-col relative z-50 m-auto w-[340px] bg-white p-4 rounded-lg shadow-xl">
            <div className="flex justify-end">
              <IoIosClose 
                className="text-3xl text-gray-600 cursor-pointer hover:text-gray-800 transition" 
                onClick={onClose} 
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
