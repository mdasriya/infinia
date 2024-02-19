import React from 'react'
import "../slider.css"

export const stats = [
    {
      text: 'Contact Us',
    },
    {
  
      text: 'FAQ',
    },
    {
   
      text: 'T&C',
    },
    {
   
      text: 'WPC Wood Polymer Composite',
    },
    {
 
      text: 'Silicone',
    },
    {
 
      text: 'Blog',
    },
    {
 
      text: 'Policy',
    },
  ];

const Address = () => {
  return (
    <>
   
    <div className='w-full'>
   {/* first */}
    <div className=' text-center flex items-center  flex-col justify-center'>

    <div className='w-auto px-2 py p border-b-4 border-gray'>
      <h1 className='text-[26px] '>Our Address</h1>
     </div>
     <div className='w-auto  mt-6'>
      <p className=' site_Address text-lg text-gray-500 sm:border-red-700 sm:color-red-600'>4th Floor, 'Infinia House', Near Indora Square, Kamptee Road, Nagpur-440017 -Maharashtra State (India) </p>
     </div>
      
    </div>
  {/* second */}
    <div className=' text-center items-center flex flex-col justify-center'>

    <div className='w-auto border-b-4 border-gray mt-2'>
      <h1 className='text-[30px] '>Useful links</h1>
     </div>
   
   
      
    </div>

  </div>
  <div className='sm:mb-4 w-full mt-6 flex flex-col md:flex-row md:items-center md:gap-10  md:border-r md:mb-5 text-center flex items-center flex flex-col justify-center '>
  {stats.map((item, index) => {
    return (
      <div key={index} className='relative sm:mb-1'>
        <a href='#' className=' text-gray-500 text-lg odd:border-r lg:even:last:border-none p5-5 pr-5   border-r-zinc-300 hover:text-teal-900'>{item.text}</a>
      </div>
    );
  })}
</div>
  </>
  
  )
}

export default Address
