
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Header from './Header';

const Hero = () => {
  // Array of images for the slider
  const images = [
    'https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://img.freepik.com/premium-photo/black-fashion-gumshoes_1306135-55212.jpg?w=740',
    'https://img.freepik.com/premium-photo/shirt-hanging-hanger-with-picture-two-birds-it_979014-27064.jpg?w=360',
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Optional, allows swipe functionality with a mouse
  });

  return (
    <>
    <div
   
      {...handlers}
      className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden"
    >
      {/* Image Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded m-1"
          />

          {/* Overlay for darkening the image */}
          <div className="absolute inset-0 bg-opacity-40"></div>

          {/* Content on each slide */}
          <div className="mt-[25vh] absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0">
            <h1 className="text-white text-[20px] md:text-4xl font-bold mb-4 bg-opacity-80 bg-gray-800 rounded-lg px-4 py-2 ">
              Level up Your style with our Dishes
            </h1>
            <div className='font-serif font-bold'>
            <button className="mt-4 bg-white text-black rounded-lg px-6 py-2  transition duration-200">
              Order Now
            </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows positioned in the top right corner */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:bg-opacity-75 transition-colors duration-200">
          &gt;
        </button>
      </div>
    </div>

    </>
  

  );
};

export default Hero;
