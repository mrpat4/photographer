"use client";
import GalleryModal from "@/components/GalleryModal";
import { galleryData } from "../seeds";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImage(galleryData[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const showNextImage = () => {
    if (currentIndex < galleryData.length - 1) {
      setSelectedImage(galleryData[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showPrevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(galleryData[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <div className="grid gap-1 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] auto-rows-[300px] grid-flow-dense min-w-full overflow-hidden">
        {galleryData.map((item, index) => (
          <div key={item.name} className={`${item.className} gallery-item-wrapper`} onClick={() => openModal(index)}>
            <img
              className={`${item.imageClass ? item.imageClass : "object-top"} w-full h-full object-cover rounded-[7px]`}
              src={item.url}
              alt={item.name}
              loading="lazy"
            />
            <div className="gallery-title-wrapper">
              <h3 className="font-light uppercase">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <GalleryModal
          selectedImage={selectedImage}
          closeModal={closeModal}
          showNextImage={showNextImage}
          showPrevImage={showPrevImage}
          currentIndex={currentIndex}
          totalImages={galleryData.length}
        />
      )}
    </div>
  );
};

export default Gallery;
