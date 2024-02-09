import React from 'react';
import {IoCloseOutline} from 'react-icons/io5'

function PopUp({orderPopup, setOrderPopup}) {
  return (
    <>
        {
            orderPopup && (
                <div className='h-screen w-screen fixed top-0 bg-black/50 z-50 backdrop-blur-sm'>
                    <div className='fixed top-20 left-8 sm:left-20 bg-white p-4 rounded-md sm:w-[500px] w-[300px]'>
                        {/* header */}
                        <div className='flex items-center justify-between'>
                            <div>
                                <h1>Book Your Trip</h1>
                            </div>
                            <div>
                                <IoCloseOutline className='text-2xl cursor-pointer' onClick={() => setOrderPopup(false)} />
                            </div>
                        </div>
                        {/* body */}
                            <div>
                                <input type="text" placeholder='Name' className='w-full rounded-full border border-gray-300 px-2 py-1 mb-4' />
                                <input type="text" placeholder='email' className='w-full rounded-full border border-gray-300 px-2 py-1 mb-4' />
                                <input type="text" placeholder='Address' className='w-full rounded-full border border-gray-300 px-2 py-1 mb-4' />
                                <div className='flex justify-center items-center'>
                                    <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full'>Book Now</button>
                                </div>
                            </div>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default PopUp