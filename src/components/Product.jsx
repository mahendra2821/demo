import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import SwipeImage from './SwipeImage';


function Products() {

const picks = [
    {
      title: "Best Seller",
      img: "https://img.freepik.com/premium-photo/clothing-rack-with-hawian-shirts-with-floral-print_1336671-19140.jpg?ga=GA1.1.90674.1728978621&semt=ais_hybrid", // Replace with your image link
    },
    {
      title: "Shop Men",
      img: "https://img.freepik.com/premium-photo/checkshirt-hanging-wall-with-decent-background-generated-by-ai_1020799-8082.jpg?w=740", // Replace with your image link
    },
    {
      title: "Shop Shoes",
      img: "https://img.freepik.com/free-photo/pair-brown-leather-boots_1150-6005.jpg?t=st=1729418116~exp=1729421716~hmac=628939e159f57e34c93223810b931cb4da6125b50999670107018512a7b1381b&w=360", // Replace with your image link
    },
    {
      title: "Shop Casual",
      img: "https://img.freepik.com/premium-photo/modern-business-attire-concept-men_952286-23561.jpg?w=1060", // Replace with your image link
    },
  ];

  return (
    <>
    
    <div className="text-start p-10">
      <h1 className="text-3xl mb-8 font-serif font-bold">Curated Picks</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {picks.map((pick, index) => (
        <div
        key={index}
        className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
      >
        <img
          src={pick.img}
          alt={pick.title}
          className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
    
<div className="absolute bottom-4 left-4 bg-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:font-serif hover:font-bold hover:text-black shadow-lg transition-colors duration-300">
  <span className="font-semibold">{pick.title}</span>
  <span className="text-gray-500 hover:text-white">→</span>
</div>

          </div>
        ))}
      </div>
    </div>

    <SwipeImage/>


<div className="lg:block md:block">
    <div className="md:flex lg:flex ml-[10vw] font-serif grid lg:grid-cols-2 md:grid-cols-2 mr-5 lg:hidden-none md:hidden-none ">
        <img src="https://img.freepik.com/premium-photo/green-pair-shoes-watch-wooden-table_1161029-9150.jpg?w=900" className="lg:h-[45vh] lg:ml-[10vw] md:h-[45vh] md:ml-[10vw] mt-5" /> 
        <div  className="border-2 bg-zinc-200 lg:mt-12 md:mt-12 ">
            <p  className="lg:ml-[2vw] md:ml-[10vh] ml-5 lg:py-[5vh] mt-4 md:mt-[15vh]font-serif font-bold  ">Limmited </p>
            <h1 className="lg:ml-[2vw] md:ml-[10vh] ml-5 text-[15px] font-serif font-bold text-emerald-900 lg:w-[15vw] md:w-[15vw]"> 35% off only this friday and get Special gift. </h1> 
            <div className="flex">
            <button className="lg:ml-[2vw] md:ml-[10vh] ml-5 mb-5 bg-white text-black font-serif hover:font-bold py-2 px-4 rounde mt-4 rounded hover:text-white transition-colors duration-300"> Book Now →</button> 
          
            </div>
            </div>
            </div>

        </div>






</>
  )
}

export default Products