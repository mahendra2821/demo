

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css'

import { Navigation, Pagination } from 'swiper/modules';

const products = [
  { id: 1, img: 'https://img.freepik.com/premium-photo/hanger-displaying-mens-long-sleeve-white-shirt-suit_1061358-302283.jpg?w=740', title: 'Printed T-shirt', price: '₹ 599' },
  { id: 2, img: 'https://img.freepik.com/premium-photo/watch-with-brown-face-black-face-black-face_1300773-2517.jpg?w=740', title: 'Printed T-shirt', price: '₹ 599' },
  { id: 3, img: 'https://img.freepik.com/premium-photo/row-shirts-hanging-rack-with-one-that-says-t-shirt_1313274-8673.jpg?w=740', title: 'Printed T-shirt', price: '₹ 599' },
  { id: 4, img: 'https://img.freepik.com/free-photo/non-binary-person-leather-jacket-looking-away_23-2148760567.jpg?t=st=1729425426~exp=1729429026~hmac=a84879c0df6a769c86316fa7bd4361d79898aefe334350535feb1bafb410f622&w=740', title: 'Printed T-shirt', price: '₹ 599' },
  { id: 1, img: 'https://img.freepik.com/premium-photo/red-running-sneakers-mockupwhite-background_873668-12680.jpg?w=740', title: 'Printed T-shirt', price: '₹ 599' },
  { id: 2, img: 'https://img.freepik.com/premium-photo/ladies-sport-shoe-pair-isolated-white-background_1036468-18793.jpg?w=740', title: 'Printed T-shirt', price: '₹ 599' },
  { id: 3, img: 'https://img.freepik.com/premium-photo/hanger-displaying-mens-long-sleeve-white-shirt-suit_1061358-302283.jpg?w=740', title: 'Printed T-shirt', price: '₹ 599' },
  { id: 4, img: 'https://img.freepik.com/premium-photo/watch-with-brown-face-black-face-black-face_1300773-2517.jpg?w=740', title: 'Printed T-shirt', price: '₹ 599' },
];

const SwipeImage = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 font-serif font-bold ">Featured Products</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="card h-100 animated-card">
              {/* Product Image */}
              <img src={product.img} className="card-img-top " alt={product.title} />

              {/* Horizontal Line below the image */}
              <hr className="my-0" />

              {/* Card Body */}
              <div className="card-body">
                <h5 className="card-title font-serif font-bold">{product.title}</h5>
                <p className="card-text font-serif text-gray font-bold">{product.price}</p>
                <button className="btn btn-outline-dark d-flex align-items-center">
                  <span className='font-serif font-bold '>Add to Cart</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l1.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"  />
                  </svg>

                </button>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipeImage;

