import React from 'react';
import Location from '../Components/Location/Location';

function About() {
  return (
    <div className='container pt-14'>
      <div className='py-10'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
          About Us
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque iusto optio repudiandae eligendi id ad, dolore voluptas mollitia architecto repellendus sunt veritatis repellat accusamus? Officia iste a in. Magni, quia! Lorem ipsum dolor sit amet consectetu adipisicing elit. Voluptates facere quae quidem alias, rem eum ipsa, odit dolorum ea, nam tempora eaque. Esse exercitationem, voluptas explicabo corrupti autem repellat nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae, fuga debitis quo tenetur atque porro sequi ea fugit incidunt repudiandae dignissimos consectetur eaque. Itaque ducimus consequatur fugit perspiciatis eius.</p>
      </div>
      <Location />
    </div>
  )
}

export default About