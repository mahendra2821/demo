import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

import { IoPinOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { PiMaskHappy } from "react-icons/pi";

import { GiAirplaneArrival } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";







function Brands() {

  return (

    <>
    <div>
        <h1 className="text-black ml-[25vw] font-serif lg:text-4xl md:text-4xl text-3xl mt-4">Brands </h1>
 
        <div className="flex justify-center items-center grid lg:grid-cols-7 md:grid-cols-7 grid-cols-3 w-1/2 ml-[23vw]">
            <p><FaLinkedin className="rounded lg:text-4xl md:text-4xl text-3xl ml-[5vw]"/> </p>
            <p><FaInstagramSquare className="rounded ml-[5vw] lg:text-4xl md:text-4xl text-3xl"/> </p>
            <p><FaFacebook className="ml-[5vw] rounded lg:text-4xl md:text-4xl text-3xl"/> </p>
            <p><FaTwitter className="ml-[5vw] rounded lg:text-4xl md:text-4xl text-3xl"/> </p>
            <p><FaYoutube className="ml-[5vw] rounded lg:text-4xl md:text-4xl text-3xl"/> </p>
            <p><FaWhatsappSquare className="ml-[5vw] rounded lg:text-4xl md:text-4xl text-3xl"/> </p>

            </div>

            <div className="mt-5 lg:flex md:flex  lg:ml-[10vw] md:ml-[10vw] ">
                <h1 className="ml-5 font-semibold font-serif text-2xl lg:mr-[40vw] md:mr-[40vw] "> We provide best <br/> customer Experince </h1>

                <div className="flex">
                    <p><IoPinOutline className="lg:h-[8vh] lg:text-6xl md:h-[8vh] md:text-6xl text-slate-400 hidden lg:block md:block"/></p>
                <p className="ml-5 font-semibold font-serif text-slate-400 lg-mr-[10vw] md-mr-[10vw]">we ensure our customer best <br/>shopping experince</p>
                </div>
                </div>



                <div className="flex grid lg:grid-cols-4 md:grid-cols-4 gap-4 grid-cols-1 font-serif m-6">

                <div className="border-2 mb-2 bg-zinc-200	">
                    <p><CiDollar className="bg-slate-200 text-6xl m-4"/></p>
                    <h1 className="m-4">Original Products</h1>
                    <p className="m-4">We provide Money back gurantee if the
                         product or not good </p>
                    </div>
                    <div className="border-2 mb-2 bg-zinc-200	">
                    <p><PiMaskHappy className="bg-slate-200 text-6xl m-4"/></p>
                    <h1 className="m-4">Original Products</h1>
                    <p className="m-4">We provide Money back gurantee if the
                         product or not good </p>
                    </div>
                    <div className="border-2 mb-2 bg-zinc-200	">
                    <p><GiAirplaneArrival className="bg-slate-200 text-6xl m-4"/></p>
                    <h1 className="m-4">Original Products</h1>
                    <p className="m-4">We provide Money back gurantee if the
                         product or not good </p>
                    </div>
                    <div className="border-2 mb-2 bg-zinc-200	">
                    <p><FaShippingFast className="bg-slate-200 text-6xl m-4"/></p>
                    <h1 className="m-4">Original Products</h1>
                    <p className="m-4">We provide Money back gurantee if the
                         product or not good </p>
                    </div>
                    </div>
              
</div>

 <div>

                    
        </div>
    
     </>

  )}

export default Brands