"use client";

import { useRef, useEffect } from "react";

const ImageModal = ({ selectedImage, closeModal, showNextImage, showPrevImage, currentIndex, totalImages }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div ref={modalRef} className="relative bg-white p-4 rounded-lg shadow-lg md:m-0 m-2">
        {/* <span className="absolute top-2 right-2 text-2xl cursor-pointer" onClick={closeModal}>
          ×
        </span> */}
        <img className="max-w-full max-h-[80vh] object-contain" src={selectedImage.url} alt={selectedImage.name} />
        <div className="text-center mt-2">{selectedImage.name}</div>
        {currentIndex > 0 && (
          <button
            className="md:text-white text-black absolute md:-left-10 left-10 -bottom-1 transform -translate-y-1/2 text-2xl hover:text-primary transition-colors duration-300"
            onClick={showPrevImage}
          >
            ❮
          </button>
        )}
        {currentIndex < totalImages - 1 && (
          <button
            className=" md:text-white text-black absolute md:-right-10 right-10 -bottom-1 transform -translate-y-1/2 text-2xl hover:text-primary transition-colors duration-300"
            onClick={showNextImage}
          >
            ❯
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
