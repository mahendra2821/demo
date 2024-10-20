import React from 'react'
// import { FaLinkedin } from "react-icons/fa6";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaClapperboard } from "react-icons/fa6";
// import { FaWhatsappSquare } from "react-icons/fa";

import { IoPinOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { PiMaskHappy } from "react-icons/pi";

import { GiAirplaneArrival } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import Header from './Header';


function Brands() {

  return (

    <>

    <div>

    <div className="text-start lg:ml-10 p-10">
      <h1 className="text-3xl font-bold mb-8 font-serif">Brands</h1>

      {/* Updated grid with centered items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-5 place-items-center">
        <img
          src="https://logowik.com/content/uploads/images/399_chanel.jpg"
          alt="Chanel"
          className="w-20 h-20 animate-zoom-in"
        />
        <img
          src="https://thumbs.dreamstime.com/b/web-183281700.jpg"
          alt="Gucci"
          className="w-20 h-20 animate-zoom-in"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjUSWDAqETBh9H1zmye-EMCGTVB53V61uZg&s"
          alt="Levi's"
          className="w-20 h-20 animate-zoom-in"
        />
        <img
          src="https://thumbs.dreamstime.com/b/vector-logos-collection-most-famous-fashion-brands-world-vector-format-available-illustrator-ai-versace-logo-120007074.jpg"
          alt="Versace"
          className="w-20 h-20 animate-zoom-in"
        />
        <img
          src="https://thumbs.dreamstime.com/b/web-183281700.jpg"
          alt="Gucci"
          className="w-20 h-20 animate-zoom-in"
          />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjUSWDAqETBh9H1zmye-EMCGTVB53V61uZg&s"
          alt="Levi's"
          className="w-20 h-20 animate-zoom-in"
        />
        <img
          src="https://thumbs.dreamstime.com/b/vector-logos-collection-most-famous-fashion-brands-world-vector-format-available-illustrator-ai-versace-logo-120007074.jpg"
          alt="Versace"
          className="w-20 h-20 animate-zoom-in"
        />
      </div>
    </div>
            <div className="lg:flex md:flex  lg:ml-[10vw] md:ml-[10vw] ">
                              <h1 className="ml-5 text-black font-bold font-serif text-2xl lg:mr-[40vw] md:mr-[40vw] leading-tight">
                    We provide best <br /> customer Experience
                    </h1>
                <div className="flex">
                    <p><IoPinOutline className="lg:h-[8vh] lg:text-6xl md:h-[8vh] md:text-6xl text-slate-900 hidden lg:block md:block"/></p>
                <p className="ml-5 font-bold font-sans text-slate-400 lg-mr-[10vw] md-mr-[10vw]">we ensure our customer best <br/>shopping experince</p>
                </div>
                </div>



                <div className="flex grid lg:grid-cols-4 md:grid-cols-4 gap-4 grid-cols-1 font-serif ml-[10vw] mr-[10vw] mt-5 mb-4">


                <div  className="mb-2 shadow transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                    <p><CiDollar className="bg-slate-200 text-6xl m-4 rounded"/></p>
                    <h1 className="m-4 text-[20px] font-serif font-bold">Original Products</h1>
                    <p className="m-4 text-[15px] text-gray-500">We provide Money back gurantee if the
                         product or not good </p>
                    </div>
                    <div  className="mb-2 shadow transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                    <p><PiMaskHappy className="bg-slate-200 text-6xl m-4 rounded"/></p>
                    <h1 className="m-4 text-[20px] font-serif font-bold">Stisfaction Guarantee</h1>
                    <p className="m-4 text-[15px] text-gray-500">Exchange the product You have bought if it does not fit you. </p>
                      </div>
                      <div  className="mb-2 shadow transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                      <p><GiAirplaneArrival className="bg-slate-200 text-6xl m-4 rounded"/></p>
                    <h1 className="m-4 text-[20px] font-serif font-bold">New Arrivals Every Week</h1>
                    <p className="m-4 text-[15px] text-gray-500">We Update our collection every week with new products.
                     </p>
                    </div>
                    <div  className="mb-2 shadow transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                    <p><FaShippingFast className="bg-slate-200 text-6xl m-4 rounded"/></p>
                    <h1 className="m-4 text-[20px] font-serif font-bold">Fast and Free Delivery</h1>
                    <p className="m-4 text-[15px] text-gray-500">We Offer fast and free shipping for our loyal customers. </p>
                     </div>
                    </div>          
</div>
 <div>                 
        </div>
    
     </>

  )}

export default Brands