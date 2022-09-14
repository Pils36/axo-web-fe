import React, { useState } from 'react'
import Logo from "../images/logonew.png"
import {Link} from "react-router-dom"

const Nav = ({showMenu, active}) => { 

    const [open, setOpen] = useState (false)
    const toggling = () => setOpen(!open)

  return (
    <div className=''>
        {/* <nav>
            <div className='absolute right-8 md:hidden top-3 scale-150'>
                
            </div>

            <ul className='hidden md:flex gap-8 p-6 capitalize bg-white/10 cursor-pointer text-white'>
                <li><Link to='/'>Moving</Link></li>
                <li><Link to='/storage'>Storage</Link></li>
                <li><Link to='/freequote'>Get a free quote</Link></li>
                <li><Link to='consultation'>Book consultation</Link></li>
                <li><Link to='/contact'>Conatct Us</Link></li>
            </ul>
            <MenuItems showMenu={showMenu} active={active} setActive={setActive}/>
        </nav> */}

        <nav className={active ? "sidebar fixed top-0 bottom-0 lg:right-0 p-2 w-[400px] overflow-y-auto bg-gradient-to-b from-[#54A4D9] to-[#3C3182]" : "hidden" }>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={showMenu} className="h-6 w-6 ml-72 bg-white scale-100 mt-3 rounded-sm text-black cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            <div className='text-center'>
                <div className='text-gray-100 text-xl'>
                    <div className='p-2.5 mt-1 flex items-center'>
                        <Link className='no-underline' to='/'>
                         <div className="flex md:flex px-24 mt-10 pb-9 border-b border-white">
                            <div className='md:flex items-center'>
                                <img src={Logo} alt=""  className='text-white scale-100'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                        <div className='flex items-center justify-center my-2 gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
                            <span className='text-white text-xl font-medium'></span>
                            <a className='text-white text-xl font-medium no-underline' href="tel:+2347043748903">07043748903</a>
                        </div>

                        <div>
                            <button className='capitalize py-[15px] px-20 text-xs text-blue-500 bg-white rounded-md font-semibold mb-3'><Link to='/freequote' className='no-underline'>get a quoute!</Link></button>
                            <button className='capitalize py-[15px] px-16 text-xs text-white bg-transparent border-2 border-[#54A4D9] rounded-md font-semibold'><Link to='/consultation' className='no-underline'>book virtual survey</Link></button>
                        </div>
                </div>
            </div>
            <ul className='cursor-pointer'>
                <li className='text-[20px] text-white font-medium mt-4 flex'  onClick={toggling}>Moving <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-2 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg></li>
                {open && (
                <div className='text-white cursor-pointer'>
                    <h1 className='text-left text-sm font-normal mt-2 w-4/5 mx-auto'><Link to="/localmoving" className='no-underline hover:text-[#54A4D9]'>Local Moving</Link></h1>
                    <h1 className='text-left text-sm font-normal mt-2 w-4/5 mx-auto'><Link to="/commercialmoving" className='no-underline hover:text-[#54A4D9]'>Commercial Moving</Link></h1>
                </div>)}
                <li className='text-[20px] text-white font-medium mt-3'><Link to="/storage" className='no-underline hover:text-[#54A4D9]'>Storage</Link></li>
                <li className='text-[20px] text-white font-medium mt-3'><Link to="/freequote" className='no-underline hover:text-[#54A4D9]'>Get A Free Quote</Link></li>
                <li className='text-[20px] text-white font-medium mt-3'><Link to='/consultation' className='no-underline hover:text-[#54A4D9]'>Book Consultation</Link></li>
                <li className='text-[20px] text-white font-medium mt-3'><Link to="/contact" className='no-underline hover:text-[#54A4D9]'>Contact Us</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav