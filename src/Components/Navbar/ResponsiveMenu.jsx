import React from 'react'
import {FaUserCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const navbarLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Our Services",
        link: "/services",
    },
    {
        name: "Blogs",
        link: "/blogs",
    },
    {
        name: "Best Places",
        link: "/places",
    }
]


function ResponsiveMenu({showMenu, setShowMenu}) {
  return <div className={`${showMenu ? 'left-0' : '-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[85%] flex-col justify-between bg-primary text-white font-bold dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
    <div className='Navbar_card'>
        {/* top section  */}
        <div>
            <div className='flex items-centre justify start gap-4'>
                <FaUserCircle size={50} className='text-white-500' />
                <div className='text-grey-500'>
                    <h1>Hello User</h1>
                    <Link to='/signup'>
                        <h1 className='text-sm text-slate-500 mt-2' onClick={() => {
                            window.scrollTo(0, 0)
                        }}>SIGN UP</h1>
                    </Link>
                </div>
            </div>
        </div>
        {/* Navbar section */}
        <div className='text-white mt-12'>
            <ul className='space-y-3 text-xl'>
                {
                    navbarLinks.map(({name, link}) => (
                        <li>
                            <Link 
                                to={link}
                                onClick={() => setShowMenu(false)}
                                className='mb-5 inline-block' 
                            >
                                {name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>


    </div>
  </div>
}

export default ResponsiveMenu