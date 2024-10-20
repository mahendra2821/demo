import React from 'react';
import Footer_section from './Footer_section';

const Subscribe = () => {
    return (
        <div className="bg-gray-10 text-black text-center py-10 px-5 mt-[8vw] ml-1 rounded font-serif font-bold">
            <div className="mb-10">
                <h2 className=" md:text-[22px] text-[20px] font-bold mb-4 lg:text-[22px]">
                    Subscribe to our new sletter to get updates to our latest collections
                </h2>
                <p className="text-gray-400 mb-6 text-[12px] lg:text-[12px] md:text-[12px] ">
                    Get 20% on your first order just by subscribing <br/> to our newsletter
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-auto px-4 py-2 rounded-md border font-serif font-bold text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        Subscribe
                    </button>
                </div>
                <p className="text-gray-500 mt-4 text-sm">
                    You will be able to unsubscribe at any time
                </p>
                <p className="text-gray-500 text-sm">
                    Read our <a href="#privacy-policy" className="text-blue-500 underline">Privacy Policy</a> here
                </p>
            </div>
            <footer className="border-t border-gray-700 pt-8 hidden lg:block md:block">
                <div className="flex flex-wrap justify-around text-left">
                    <div className="mb-6">
                        <p className="font-semibold w-[17vw]">Buy High Quality Products from the best brands in the world.</p>
                    </div>
                    <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-[20px]">Shop</h4>
                        <p className='text-slate-500 hover:underline  text-[12px]'>All Collections</p>
                        <p className='text-slate-500 hover:underline text-[12px]' >Winter Collection</p>
                        <p className='text-slate-500 hover:underline text-[12px]'>Discounts</p>
                    </div>
                    <div className="mb-6">
                        <h4 className="font-semibold mb-2">Company</h4>
                        <p className='text-slate-500 hover:underline text-[12px]'>About Us</p>
                        <p className='text-slate-500 hover:underline text-[12px]'>Contact</p>
                        <p className='text-slate-500 text-[12px]'>Affiliates</p>
                    </div>
                    <div className="mb-6">
                        <h4 className="font-semibold mb-2  text-[20px]">Support</h4>
                        <p className='text-slate-500 hover:underline text-[12px]'>FAQs</p>
                        <p className='text-slate-500 hover:underline text-[12px]' >Cookie Policy</p>
                        <p className='text-slate-500 hover:underline text-[12px]'>Terms of Use</p>
                    </div>
                    <div className="mb-6">
                        <h4 className="font-semibold mb-2  text-[20px]">Payment Methods</h4>
                        <p className='text-slate-500 hover:underline text-[12px]'>Credit Card</p>
                        <p className='text-slate-500 hover:underline text-[12px]'>UPI</p>
                        <p className='text-slate-500 hover:underline text-[12px]'>Paypal</p>
                    </div>
                </div>
            </footer>

            
            <Footer_section/>
        </div>
       
    );
};

export default Subscribe;
