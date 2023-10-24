// import GalleryCard from "../../components/cards/GalleryCard";
import gallery from '../../assets/images/gallery.jpg'



// function OurGallerySection() {
//   return (
//     <div className="services-section mt-24">
//       <h1 className="text-3xl text-black font-inter font-semibold">
//         Our Gallery
//       </h1>
//       <div className="mt-10 grid grid-cols-3 gap-x-12 gap-y-8">
//         {Array(12).fill(0).map((ele,i)=>{
//             return <GalleryCard key={i} img={gallery}/>
//         })}
//       </div>
//     </div>
//   );
// }

// export default OurGallerySection;


import React, { useState } from 'react';
// import './App.css';
import Modal from './Modal'; // Import your Modal component

function OurGallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <div className="image-container grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative" onClick={() => openModal(image)}>
            <img src={gallery} alt={`Image ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <Modal image={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
}

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs here
];

export default OurGallerySection;
