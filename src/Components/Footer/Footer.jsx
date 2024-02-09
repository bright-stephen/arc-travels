import React from 'react';
import FooterLogo from '../../assets/images/Arc.png';
import {FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaWhatsapp} from 'react-icons/fa';
import FooterVideo from '../../assets/videos/vacation-video.mp4';
import {Link} from 'react-router-dom';


const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Our Services",
    link: "/services",
},
{
    title: "Top Brands",
    link: "/topbrands",
},
{
    title: "Location",
    link: "/location",
},
]

function Footer() {
  return (
    <div className='py-10 relative overflow-hidden'>
      <video 
      autoPlay
      loop
      muted
      className='absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]'>
        <source src={FooterVideo} type='video/mp4'/>
      </video>
      <div className='container'>
        <div className='grid md:grid-cols-3 py-5 bg-white backdrop-blur-sm rounded-t-xl p-4'>
          <div>
            <div>
              <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                <img src={FooterLogo} alt="" className='max-h-[250px]'/>
              </h1>
              <p className='text-sm py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus sit amet non. Quas voluptatum non tenetur, repudiandae error sit excepturi, ea blanditiis eius nisi alias nam ratione et repellat.</p>
            </div>
            <br />
            <div>
              <div className='flex items-center gap-3 mt-3'>
                <FaLocationArrow />
                <p>Lorem ipsum dolor</p>
              </div>
              <div className='flex items-center gap-3 mt-3'>
                <FaMobileAlt />
                <p>+123 4567890</p>
              </div>
            </div>
            {/* social media links */}
            <div>
              <div className='flex items-center gap-3 mt-6'>
                <a href="#">
                  <FaWhatsapp className='text-3xl'/>
                </a>
                <a href="#">
                  <FaFacebook className='text-3xl'/>
                </a>
                <a href="#">
                  <FaInstagram className='text-3xl'/>
                </a>
                <a href="#">
                  <FaLinkedin className='text-3xl'/>
                </a>
              </div>
            </div>
          </div>
          {/* footer links  */}
          <div className='md:flex col-span-2 md:pl-'>
            <div>
              <div className='py-8 px-4'>
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map(({title, link}) => {
                        return(
                          <li className='cursor-pointer py-1 hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-grey-700'>
                            <Link to={link} onClick={() => {
                              window.scrollTo(0, 0)
                            }}>
                              <span>&#11162;</span>
                              <span>{title}</span>
                            </Link>
                          </li>
                        )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className='hidden sm:block'>
              <div className='py-8 px-4'>
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map(({title, link}) => {
                        return(
                          <li className='cursor-pointer py-1 hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-grey-700'>
                            <Link to={link} onClick={() => {
                              window.scrollTo(0, 0)
                            }}>
                              <span>&#11162;</span>
                              <span>{title}</span>
                            </Link>
                          </li>
                        )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className='hidden sm:block'>
              <div className='py-8 px-4'>
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map(({title, link}) => {
                        return(
                          <li className='cursor-pointer py-1 hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-grey-700'>
                            <Link to={link} onClick={() => {
                              window.scrollTo(0, 0)
                            }}>
                              <span>&#11162;</span>
                              <span>{title}</span>
                            </Link>
                          </li>
                        )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* footer copyright text */}
        <div>
          <div className='text-center py-2 border-t-2 border-gray-300/50 bg-primary text-white'>
            @copyright 2024.All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer