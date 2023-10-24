import React from "react";

function GalleryCard({ img }) {
  return (
    <>
      <img
        className="w-[400px] h-[200px] rounded-3xl hover:scale-110 transform transition-transform duration-300 ease-in-out"
        src={img}
        alt="gallery"
      />
    </>
  );
}

export default GalleryCard;
