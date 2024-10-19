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


function Header() {

    const [menu , setMenu] = useState(false)
    // const navbar  = [
    //     {
    //     id : 1 ,
    //     items: 'shop',
    //     icon : <FaAngleDown/>
    //     },
    //     {
    //         id : 2 ,
    //         items: 'Most Wanted',
    //         },
    //         {
    //             id : 3 ,
    //             items: 'New Arrival',
    //             },
    //             {
    //                 id : 4 ,
    //                 items: 'Brands',
    //                 },
      
    // ]
  return (
    <>
    <div className='lg:bg-black md:bg-black text-center text-white flex bg-black'>

  
       <p className='lg:ml-[40vw] md:ml-[40vw] mt-2 text-sm ml-5'>Sign up Get 20% OFF for your first Order</p>   
      <p className='lg:ml-[40vw] md:ml-[40vw] ml-[20vw] mt-3 mr-2'> <TbXboxX className='wrong-icon'/></p>
    
      </div>
 
    <div className='Navbar flex font-serif'>
        <div className="">
        <h1 className='mt-5 ml-[5vw] mr-[25vw] hidden lg:block md:block'>Monster</h1>
        </div>

        {/* <div className='lg:hidden-none md:hidden-none hidden sm:hidden-none md:flex space-x-6 items-center list-none text-lg'>
        {navbar.map(item =>( 
          
          <div key={item.id} className='flex'>
        <li className='hover:text-yellow-500 duration-200 cursor-pointer'><Link to="/">{item.items}</Link></li>
           <p className='mt-1'>{item.icon}</p>
           
         </div>
        ))}
        </div> */}


<div className='lg:hidden-none md:hidden-none hidden sm:hidden-none md:flex space-x-6 items-center list-none text-lg'> 
<ul> 
<div className='flex'>
    
       <li><Link to="/shop" className='hover:text-yellow-500 duration-200 hover:bg-zinc-300 cursor-pointer text-black'>Shop</Link></li>
           <p className='mt-1'><FaAngleDown/></p>
           <li><Link to="/most-wanted" className='hover:text-yellow-500  hover:bg-zinc-300 duration-200 cursor-pointer lg:ml-7 md:ml-7 text-black'>Most Wanted</Link></li>
           <li><Link to="/arrival" className='hover:text-yellow-500 duration-200 hover:bg-zinc-300 cursor-pointer lg:ml-7 md:ml-7 text-black'>New Arrival</Link></li>
           <l><Link to="/brands" className='hover:text-yellow-500 duration-200 hover:bg-zinc-300 cursor-pointer lg:ml-7 md:ml-7 text-black'>Brands</Link></l>

              
         </div>
         </ul> 
    </div>


<div className='flex h-9 mt-5 ml-[7vw] border-2 rounded mr-[10vw] hidden lg:block md:block'>
      <input type='search' placeholder='search' className='p-2'/>     
</div>
        <div className='mt-5 flex hidden lg:block md:block'>
            <div className='flex'>
            <p><CiShoppingCart className='mr-4 '/>  </p>
            <p><IoIosContact className='mr-4 '/>  </p>

            </div>
        
          
        </div>   
    </div>



    <div className='flex w-full justify-content-between items-center md:hidden p-2 shadow-sm'>
        <div className="text-xl font-bold flex items-center gap-2">
            <h1 className="text-black font-serif">Monster</h1>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <div onClick={() => setMenu(!menu)}>
                {menu ? (
                    <IoMdClose size={30} className='text-black' /> 
                ) : (
                    <IoMdMenu size={30} className='text-black'/>
                )
                }
            </div>
        </div>
        </div>

    {/* {menu && (
        <div className='md:hidden bg-yellow-50 py-6 justify-center items-center text-lg text-black flex flex-col shadow-sm list-none gap-2'> 
          {navbar.map((item) =>( 
          
              <li className='hover:text-yellow-500  duration-200 cursor-pointer border-b q-11/12'>
                {item.items}
                </li>
        ))}
       
    </div> 
    )} */}

     {menu && (
        <div className='md:hidden mr-5 ml-[60vw] bg-black py-6 justify-start items-end text-lg text-white flex flex-col shadow-sm list-none gap-2 p-2 mt-4'> 

            <div className='flex'>
            <li><Link to="/shop" className='hover:text-yellow-500  duration-200 cursor-pointer border-b q-11/12 hover:bg-zinc-400 text-white'>Shop</Link></li>
            <p className='mt-1'><FaAngleDown/></p>
            </div>

        <li><Link to="/most-wanted" className='hover:text-yellow-500  duration-200 cursor-pointer border-b q-11/12 hover:bg-zinc-400 text-white'>Most Wanted</Link></li>
        <li><Link to="/arrival" className='hover:text-yellow-500  duration-200 cursor-pointer border-b q-11/12 hover:bg-zinc-400 text-white'>New Arrival</Link></li>
            <l><Link to="/brands" className='hover:text-yellow-500  duration-200 cursor-pointer border-b q-11/12 hover:bg-zinc-400 text-white'>Brands</Link></l>

                </div>

     )}

    </>
  )
}

export default Header 
