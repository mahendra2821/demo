import React, { useState } from 'react';

const FooterSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6">
            <h4
                className="font-semibold mb-2 cursor-pointer flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </h4>
            <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                {children}
            </div>
        </div>
    );
};

const Footer_section = () => {
    return (
       
            
         

          // <div className=" text-black text-start py-10 px-5 font-serif font-bold  lg:hidden md:hidden">

            <div className=" border-gray-700 pt-8 w-[80vw] text-black text-start py-10 font-serif font-bold  lg:hidden md:hidden">
            <div className="flex flex-wrap justify-around text-left">
                        <p className="">
                            Buy High Quality Products from the best brands in the world.
                        </p>
            <div className="max-w-full w-[100vw] mt-4"> 
                
                
                  <FooterSection className="" title="Shop">
                        <p className='mt-3 text-gray-500'>All Collections</p>
                        <hr/>
                        <p className='mt-3 text-gray-500'>Winter Collection</p>
                        <hr/>
                        <p className='mt-3 text-gray-500'>Discounts</p>
                        <hr/>
                    </FooterSection>
                    <FooterSection title="Company">
                        <p className='mt-3 text-gray-500'>About Us</p>
                        <hr/>
                        <p className='mt-3 text-gray-500'>Contact</p>
                        <hr/>
                        <p className='mt-3 text-gray-500'>Affiliates</p>
                        <hr/>
                    </FooterSection>
                    <FooterSection title="Support">
                        <p className='mt-3 text-gray-500'>FAQs</p>
                        <hr/>
                        <p className='mt-3 text-gray-500'>Cookie Policy</p>
                        <hr/>
                        <p className='mt-3 text-gray-500'>Terms of Use</p>
                        <hr/>
                    </FooterSection>
                    <FooterSection title="Payment Methods">
                        <p className='mt-3 text-gray-500'>Credit Card</p>
                        <hr/>
                        <p className='mt-3 text-gray-500'>UPI</p>
                        <hr/>
                        <p className='mt-3 text-gray-500'>Paypal</p>
                        <hr/>
                    </FooterSection>
                </div> 
                </div> 
                </div> 


    );
};

export default Footer_section;
