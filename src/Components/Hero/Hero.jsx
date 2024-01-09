import React from 'react';
import banner from '../../assets/hero.webp';

const Hero = () => {
  return (
    <>
      <div className='hero relative hero w-full' id='home'>
        <div className='hero-img'>
          <img src={banner} loading='lazy' alt='' />
        </div>
        <div className='absolute hero-content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white opacity-75'>
          <h1 className='text-lg sm:text-6xl font-bold mb-4'>
            YOUR RESULTS JUST GOT EASIER WITH <span className='text-pink-500'>Gym Oasis</span><br />FITNESS STUDIO
          </h1>
          <h4 className='text-sm sm:text-lg font-semibold mb-6'>
            The fitness facility for all of your needs
          </h4>
          <button className='bg-pink-500 text-white px-6 py-2 rounded-full'>JOIN NOW</button>
        </div>
      </div>

    </>
  );
};

export default Hero;
