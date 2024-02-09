import React from 'react'
import { useState } from 'react'

function Hero() {
  const [priceValue, setPriceValue] = useState(0);
  return (
    <div className='bg-white/20 h-full'>
        <div className='h-full flex justify-center items-center p-4 bg-primary/10'>
            <div className='container grid grid-cols-1 gap-4'>
                {/* text content section */}
                <div className='text-white'>
                    <p data-aos='fade-up' data-aos-delay='300' className='font-bold text-3xl text-white sm:text-black'
                    >Search Your Destination</p>
                </div>
                {/* form section  */}
                <div className='space-y-4 bg-primary sm:flex rounded-md p-4 relative gap-24'>
                  <div className='sm:grid-cols-3 py-3'>
                    <label htmlFor="destination" className='opacity-70 text-white'>Search Your Destination</label>
                    <input type="text" name='destination' id='destination' placeholder='Dubai' className='w-full bg-grey-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2' />
                  </div>
                  <div className='sm:grid-cols-3 '>
                    <label htmlFor="date" className='opacity-70 text-white'>Date</label>
                    <input type="date" name='date' id='date' className='w-full !placeholder-slate-400 bg-grey-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2' />
                  </div>
                  <div className='sm:grid-cols-3 '>
                    <label htmlFor="price" className='opacity-70 block'>
                      <div className='w-full flex justify-between items-center text-white'><p>max price</p><p className='font-bold text-xl'>${priceValue}</p></div>
                    </label>
                    <div className='bg-grey-100 rounded-full p-2 flex items-center justify-center'>
                      <input type="range" name='price' id='price' className='appearance-none w-full  h-2 rounded-full my-2' min='150' max='3000' value={priceValue} step='10' onChange={(e) => setPriceValue(e.target.value)} />
                    </div>
                  </div>
                  {/* button section */}
                  <button className='bg-gradient-to-r bg-white text-black hover:scale-105 px-4 py-2 rounded-full duration-200 font-bold absolute -bottom-5 left-1/2 -translate-x-1/2'>Search Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero