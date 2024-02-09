import React from 'react'

function Location() {
  return (
    <div>
        <div>
            <div className='container p-6'>
                <h1 className='inline-block border-l-0 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl'>
                    Location to Visit
                </h1>
                <div className='rounded-xl'>
                    <iframe src="https://maps.google.com/maps?q=port%20harcourt%20woji&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" width='100%' height='360' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' style={{borderRadius: "20px"}}></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location