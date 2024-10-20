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

const New_Navbar = () => {
    return (
       
            
            <div className="bg-gray-900 text-white text-start py-10 px-5 font-serif font-bold  lg:hidden md:hidden">
            <footer>
            <div className="max-w-3xl mx-auto mb-10">  
                
                
                  <FooterSection title="Shop">
                        <p className='mt-3'>All Collections</p>
                        <hr/>
                        <p className='mt-3'>Winter Collection</p>
                        <hr/>
                        <p className='mt-3'>Discounts</p>
                        <hr/>
                    </FooterSection>
                    <FooterSection title="Company">
                        <p className='mt-3'>About Us</p>
                        <hr/>
                        <p className='mt-3'>Contact</p>
                        <hr/>
                        <p className='mt-3'>Affiliates</p>
                        <hr/>
                    </FooterSection>
                    <FooterSection title="Support">
                        <p className='mt-3'>FAQs</p>
                        <hr/>
                        <p className='mt-3'>Cookie Policy</p>
                        <hr/>
                        <p className='mt-3'>Terms of Use</p>
                        <hr/>
                    </FooterSection>
                    <FooterSection title="Payment Methods">
                        <p className='mt-3'>Credit Card</p>
                        <hr/>
                        <p className='mt-3'>UPI</p>
                        <hr/>
                        <p className='mt-3'>Paypal</p>
                        <hr/>
                    </FooterSection>
                </div>
            </footer>
        </div>
    );
};

export default New_Navbar;
