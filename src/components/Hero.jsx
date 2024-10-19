import React from 'react'

function Hero() {

  return (

    <>
    <div className='mt-5'>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active items-center" data-bs-interval="10000">
      <img src="https://img.freepik.com/premium-photo/hot-delicious-paratha-with-ghee-tomato-sauce_466689-46264.jpg?w=900" className="d-block w-1/2 ml-[25vw] lg:h-[50vh] md:h-[50vh] h-[30vh] rounded" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://img.freepik.com/premium-photo/divided-bowl-with-chicken-wings-isolated-transparent-background_1033130-18729.jpg?w=900" className="d-block  lg:h-[50vh] md:h-[50vh] h-[30vh] w-1/2 ml-[25vw] rounded" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/thanksgiving-day-meal-with-copy-space_23-2149100116.jpg?t=st=1729323270~exp=1729326870~hmac=1416bc9f5444ca65a4a63ccc56fbc15d9fb8e0f1c48975c118849de484da5ae7&w=900" className="d-block  lg:h-[50vh] md:h-[50vh] h-[30vh] w-1/2 ml-[25vw] rounded" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev ml-[20vw]" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next mr-[20vw]" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    
    
     </>

  )}

export default Hero