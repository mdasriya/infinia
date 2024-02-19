import React from 'react';
import { hero } from "../data";
import Stats from '../components/Stats';

const Hero = () => {
  const { title, subtitle, buttonText } = hero;

  return (
    <section className='h-auto lg:h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[125px] lg:pt-[225px] pb-[54px] lg:pb-[254px] relative mb-12 lg:mb-28'>
      <div className='container mx-auto text-center'>
        <h1 className='text-2xl mx-auto font-semibold mb-[15px] lg:mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>{title}</h1>
        <h2 className='mb-[15px] max-w-[327px] mx-auto lg:mb-[65px] lg:text-xl'>{subtitle}</h2>

        <button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[20px] py-[6px] mb-[80px] text-lg rounded-md backdrop-blur-md transition lg:px-[35px] lg:py-[9px] lg:mb-[194px]'>{buttonText}</button>
        
        {/* stats */}
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
