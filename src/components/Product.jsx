import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


function Products() {

  return (
<>
<div>
    <h1 className="text-4xl ml-[5vw] font-serif underline ">  
        New Items
               </h1>
               <div className="flex gap-4 grid lg:grid-cols-4 md:grid-4 grid-cols-1 ml-[10vw] mt-4 mr-[10vw]">
                <div className = "font-serif m-4 font-semibold border-2 bg-amber-200	">
                <img src="https://img.freepik.com/free-photo/side-view-chicken-meatballs-with-greens-ketchup-plate_141793-4839.jpg?t=st=1729329945~exp=1729333545~hmac=d1895b563686921b534a605a02d4e8ea5551615b5dfbc63a411225d3a68b49d3&w=900" 
                className="h-[30vh] lg:w-[19vw] md:w-[19vw] w-[70vw]" />
                <p className="text-2xl m-4"> 299/-</p>
                <h1 className="text-2xl m-4"> Lolly Pops</h1>            
                    </div>

                    <div className = "font-serif m-4 font-semibold border-2 bg-amber-200	">
                <img src="https://img.freepik.com/free-photo/side-view-chicken-meatballs-with-greens-ketchup-plate_141793-4839.jpg?t=st=1729329945~exp=1729333545~hmac=d1895b563686921b534a605a02d4e8ea5551615b5dfbc63a411225d3a68b49d3&w=900" 
                className="h-[30vh] w-[19vw] lg:w-[19vw] md:w-[19vw] w-[70vw]" />
                <p className="text-2xl m-4"> 299/-</p>
                <h1 className="text-2xl m-4"> Lolly Pops</h1>            
                    </div>
                    <div className = "font-serif m-4 font-semibold border-2 bg-amber-200	">
                <img src="https://img.freepik.com/free-photo/side-view-chicken-meatballs-with-greens-ketchup-plate_141793-4839.jpg?t=st=1729329945~exp=1729333545~hmac=d1895b563686921b534a605a02d4e8ea5551615b5dfbc63a411225d3a68b49d3&w=900" 
                className="h-[30vh] w-[19vw] lg:w-[19vw] md:w-[19vw] w-[70vw]" />
                <p className="text-2xl m-4"> 299/-</p>
                <h1 className="text-2xl m-4"> Lolly Pops</h1>             
                    </div>
                    <div className = "font-serif m-4 font-semibold border-2 bg-amber-200	">
                <img src="https://img.freepik.com/free-photo/side-view-chicken-meatballs-with-greens-ketchup-plate_141793-4839.jpg?t=st=1729329945~exp=1729333545~hmac=d1895b563686921b534a605a02d4e8ea5551615b5dfbc63a411225d3a68b49d3&w=900" 
                className="h-[30vh] w-[19vw] lg:w-[19vw] md:w-[19vw] w-[70vw]" />
                <p className="text-2xl m-4"> 299/-</p>
                <h1 className="text-2xl m-4"> Lolly Pops</h1>            
                    </div>
                  
                </div>
    </div>
<div className="hidden lg:block md:block">
    <div className="flex mb-5 ml-[10vw] font-serif grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  lg:hidden-none md:hidden-none ">
        <img src="https://img.freepik.com/premium-photo/commercial-chicken-tikka-photography_1027230-28927.jpg?w=900" className="lg:h-[45vh] lg:ml-[15vw] mt-5 sm-h-[15vw]" /> 
        <div  className="border-2 bg-zinc-200 mt-5  mr-[20vw] ">
            <p  className="ml-[10vh] mt-[10vh]">Limmited </p>
            <h1 className="ml-[10vh] text-2xl"> 35% off only this friday and get Special gift. </h1> 
            <div className="flex ">
            <button className="ml-[10vh] hover:bg-black hover:text-white"> Book Now  </button>
            <FaLongArrowAltRight className="m-2 mt-2"/>
            </div>
            </div>
            </div>

        </div>


</>
  )
}

export default Products