import React from 'react';
import {MdFlight, MdOutlineLocalHotel} from 'react-icons/md';
import {IoWifi, IoFastFoodSharp} from 'react-icons/io5';

function Banner() {
  return (
    <div className='min-h-[550px] bg-gray-100'>
        <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
          <div className='container'>
            <div>
              <h1 className='text-3xl font-bold sm:text-4xl'>Explore All Corners Of The World With Us</h1>
              <p className='text-sm text-gray-500 tracking-wide leading-0 py-8'>lorem ipsum dolor sit amnet consectetur adipiscing elitlorem ipsum dolor sit amnet consectetur adipiscing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque repudiandae dolores quasi sapiente id asperiores ut culpa explicabo, dolorem voluptatem earum dicta animi voluptate assumenda sed doloremque consequatur velit debitis.</p>
              <div className='grid grid-cols-2 gap-6 flex items-center'>
                <div className='space-y-6'>
                  <div className='flex items-center gap-4'>
                    <MdFlight className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100' />
                    <p>Flight</p>
                  </div>
                  <div className='flex items-center gap-4'>
                    <MdOutlineLocalHotel className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 py-4'/>
                    <p>Hotel</p>
                  </div>
                </div>
                <div className='space-y-6'>
                  <div className='flex items-center gap-4'>
                    <IoWifi className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100'/>
                    <p>Wi-Fi</p>
                  </div>
                  <div className='flex items-center gap-4'>
                    <IoFastFoodSharp className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 py-4'/>
                    <p>Foods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner