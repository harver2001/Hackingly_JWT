import React from 'react';
import gallery from '../../assets/images/gallery.jpg'


const Modal = ({ image, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="modal p-4 bg-transparent rounded-lg flex flex-row-reverse">
        <button
          className="rounded-full p-2 h-5 w-5 bg-white -ml-7 mt-2.5  text-gray-700 cursor-pointer  flex items-center justify-center"
          onClick={closeModal}
        >
         <div className='text-sm text-black'>
         &times;
         </div>
        </button>
        <img src={gallery} alt="Selected Image" className="w-86 h-72" />
      </div>
    </div>
  );
};

export default Modal;
