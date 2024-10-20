import React from 'react'
import { TbXboxX } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import {useState} from 'react'


import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import Slider from './Slider';
import './New_Navbar.css'

function Header() {

    const [menu , setMenu] = useState(false)

  return (
    <>
  
    <Slider/>
    <div className='Navbar flex font-serif'>
        <div className="">
        <h1 className="mt-4 ml-[5vw] mr-[10vw] hidden lg:block md:block font-bold text-black">
  Nostra
</h1>        </div>


<div className='lg:hidden-none md:hidden-none hidden sm:hidden-none md:flex space-x-6 ml-[2vw] items-center list-none '> 

<div className='flex'>
    
       <li>
       
       <div className="dropdown">
            <button className="dropbtn text-[17px] ">Shop ▼</button>
            <div className="dropdown-content">
              <a>All Collections</a>
              <a>Winter Collection</a>
              <a>Discounts</a>
            </div>
            </div>
</li>
<li>
  <Link
    to="/most-wanted"
    className="no-underline hover:bg-zinc-300 duration-200 cursor-pointer lg:ml-7 md:ml-7 text-black text-[15px] px-1 py-1 rounded">
    Most Wanted
  </Link>
</li> 

<li>
<Link
    to="/most-wanted"
    className='no-underline hover:bg-zinc-300 duration-200 cursor-pointer lg:ml-7 md:ml-7 text-black text-[15px] px-1 py-1 rounded'>
    New Arrival 
  </Link>
</li>     

<li>
<Link
    to="/most-wanted"
    className='no-underline hover:bg-zinc-300 duration-200 cursor-pointer lg:ml-7 md:ml-7 text-black text-[15px] px-1 py-1 rounded'>
    Most Wanted
  </Link>
</li> 

       </div>       
       </div>       
        


<div className="flex h-9 mt-3 ml-[7vw] border-2 border-gray-300 rounded mr-[10vw] hidden lg:block md:block hover:bg-gray-100 transition duration-200">
   
      <div className="flex items-center px-2">
        <CiSearch className="h-5 w-5 text-gray-500" />
     
     
      <input
        type="search"
        placeholder="Search"
        className="p-2 outline-none w-full bg-transparent"
      />
    </div>
    </div>


<div className="flex mt-2">
      {/* Shopping Cart Icon with Hover */}
      <p className="hidden md:flex hover:bg-gray-200 rounded p-3 cursor-pointer transition duration-200 h-[7vh] flex items-center justify-center">
    <CiShoppingCart className="h-6 w-6"/>
      </p>

      {/* Contact Icon with Hover */}
      <p className="hidden md:flex hover:bg-gray-200 rounded p-3 cursor-pointer transition duration-200 h-[7vh] flex items-center justify-center">
        <IoIosContact className="h-6 w-6" />
      </p>
    </div>

            </div>

    


<div>
            {/* Header Section */}
            <div className='flex w-full justify-between items-center md:hidden p-2 shadow-sm'>
                <div className="text-xl font-bold flex items-center gap-2">
                    <h1 className="text-black font-serif font-bold">Monster</h1>
                </div>
                <div className='flex justify-center items-center gap-2'>
                <CiShoppingCart className='mr-4'/>
                <IoIosContact className='mr-5'/>

                    <div onClick={() => setMenu(!menu)}>
                        {menu ? (
                            <IoMdClose size={30} className='text-black' /> 
                        ) : (
                            <IoMdMenu size={30} className='text-black' />
                        )}
                    </div>
                </div>
            </div>

            {/* Background Overlay */}
            {menu && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setMenu(false)} />
            )}

            {/* Sidebar Menu */}
            {menu && (
                <div className={`fixed top-0 right-0 w-1/2 md:w-1/3 h-full text-lg text-white flex flex-col p-2 shadow-lg transform
                 transition-transform duration-300 ease-in-out z-50 text-white bg-opacity-90 bg-gray-800 ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex justify-end'>
                        <div onClick={() => setMenu(false)}>
                            <IoMdClose size={30} className='text-white cursor-pointer' />
                        </div>
                    </div>
                    <ul className='flex flex-col gap-2'>
                        


                                                    
                <div className="relative inline-block group mt-5">
                            <li className="group">
                            <button className="bg-white border border-black-400 text-black font-bold text-sm px-3 py-1 rounded focus:outline-none hover:bg-red-300">
                    Shop ▼
                </button>
                                {/* Dropdown Content */}
                                <div className="absolute font-serif right-0 hidden group-hover:block bg-gray-100  border-gray-300 shadow-lg mt-1 rounded z-10 mr-2">
                                    <a href="#" className="block px-2 py-1 text-xs text-black no-underline underline-offset text-black hover:bg-gray-200">All Collections</a>
                                    <a href="#" className="block px-2 py-1 text-xs no-underline underline-offset text-black hover:bg-gray-200">Winter Collection</a>
                                    <a href="#" className="block px-2 py-1 text-xs no-underline underline-offset text-black hover:bg-gray-200">Discounts</a>
                                </div>
                            </li>
                        </div>

   

                        <li className='flex items-center justify-between'>
                                                    <Link
                            to="/most-wanted"
                            className="text-white no-underline hover:text-black duration-200 cursor-pointer rounded p-1 font-serif hover:bg-slate-500"
                            >
                            Most Wanted
                            </Link>
                        </li>
                        <li>
                                                        <Link
                                to="/arrival"
                                className="text-white no-underline hover:text-black duration-200 cursor-pointer rounded p-1  font-serif hover:bg-slate-500"
                                >
                                New Arrival
                                </Link>                      
                                  </li>

                        <li>
                            <Link to="/brands" className='text-white no-underline hover:text-black duration-200 cursor-pointer rounded p-1 font-serif hover:bg-slate-500'>Brands</Link>
                        </li>
                    </ul>
                </div>

               
            )}
        </div>


    

    </>
  )
} 

export default Header 
