import React from 'react';
import videoVacation from '../../src/assets/videos/dubai2.mp4';
import Hero from '../Components/Hero/Hero';
import Places from '../Components/Places/Places';
import Banner from '../Components/Banner/Banner';
import BlogsComp from '../Components/Blogs/BlogsComp';
import PopUp from '../Components/PopUp/PopUp';
import { useState } from 'react';


function Home() {
  const [orderPopup, setOrderPopup] = useState();

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  return (
    <>
      <div>
        <div className='relative h-[700px]'>
          <video
           autoPlay
           loop
           muted
           className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'
           >
            <source src={videoVacation}
            type='video/mp4'  />
           </video>
           <Hero/>
        </div>
            <Places handleOrderPopup={handleOrderPopup} />
            <Banner />
            <BlogsComp />
            <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  )
}

export default Home