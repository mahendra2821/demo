import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Product from './components/Product.jsx'
import Footer from './components/Footer.jsx'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Most_wanted from './components/Most_wanted.jsx'
import Arrival from './components/Arrival.jsx'
import Brands_Details from './components/Brands_Details.jsx'
// import Slider from './components/Slider.jsx'
import New_Navbar from './components/New_Navbar.jsx'
// import Swipe from './components/Swipe.jsx'


function App() {
  return (

      <Routes>
        <Route path="/" element={ <>
             <Header />
             <Hero />
             <Brands />
             <Product />
             <Footer />
           </>} />
           <Route path="/shop" element={<Navbar />} />
           <Route path="/most-wanted" element={<Most_wanted />} />
           <Route path="/arrival" element={<Arrival />} />
           <Route path="/brands" element={<Brands_Details />} />
         </Routes> 

      // <Slider/>
      // <New_Navbar/>

  );
}


export default App