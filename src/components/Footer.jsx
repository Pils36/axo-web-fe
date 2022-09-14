import React from 'react'
import Logo from "../images/footer-logo.png"
import Location from "../images/location.png"
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, } from 'react-icons/fa';
import Locate from "../images/location.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#54A4D9] to-[#3C3182] px-20 py-2'>
      <div className='md:flex items-center justify-between mb-2'>
        <div className='text-white flex gap-4'>
          <h1 className='text-4xl'>Get Moving!</h1>
          <div className='md:flex items-center gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-4 w-4 mr-0 pr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
            </svg>
            <span className='text-white text-lg font-medium pl-0 ml-0'></span>
            <a className='text-white text-lg font-medium pl-0 ml-0 no-underline' href="tel:+2347043748903">07043748903</a>
          </div>
        </div>
        <button className='bg-white text-[#54A4D9] py-2 px-3 rounded-md hover:border-2 hover:border-[#3C3182]'><Link className='no-underline' to='/freequote'>Get a Quote</Link></button>
      </div>

      <div className='flex mb-12'>
        <input className='px-2 py-[28px] w-80' type="text" placeholder='Enter your email address'/>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 flex bg-white py-3 cursor-pointer" fill="#54A4D9" viewBox="0 0 24 24" stroke="white" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
 

      <div className='md:flex justify-between'>
        <div>
          <div className='text-white scale-75 mr-36'>
            <img src={Logo} alt="" />
          </div>
          <h1 className='uppercase text-xl font-semibold text-white'>We would love <br /> to hear from you</h1>
        </div>

        <div className='cursor-pointer'>
          <h1 className='uppercase text-xl font-thin text-white'>follow us</h1>
          <div className='flex gap-3 text-white'>
            <FaInstagram className='hover:scale-110'/>
            <FaFacebook className='hover:scale-110'/>
            <FaTwitter className='hover:scale-110'/>
            <FaTiktok className='hover:scale-110'/>
          </div>
        </div>
      </div>


      <div className='md:flex gap-28'>
        <div> 
          <div className='flex mt-3'>
            <h1 className='uppercase text-xl font-medium text-white/60 flex items-center'>our address</h1>
            <img src={Location} alt="" className='text-white/60 stroke-white/60 scale-50' />
          </div>
          <h2 className='uppercase text-lg font-light text-white/60'>axopolitan moving</h2>
          <p className='text-white/60 text-sm font-base'>The Mall, Suite 2 Women <br /> development center, oba ogunji <br /> road pencinema Lagos</p>
          <div className='cursor-pointer'>
            <h2 className='text-sm text-white/60 font-base my-0 py-0'>info@axopolitan.com</h2>
            <h2 className='text-white/60 text-sm font-base'>www.axopolitan.com</h2>
          </div>
        </div>

        <div>
          <h1 className='uppercase text-xl font-medium text-white/60 flex items-center mt-8 ml-7'>quick links</h1>
          <ul className='text-white/60 cursor-pointer font-thin'>
            <li className='hover:text-white/25'>Moving</li>
            <li className='hover:text-white/25'>About us</li>
            <li className='hover:text-white/25'>Blog</li>
            <li className='hover:text-white/25'><Link to='/consultation' className='no-underline text-white/60 hover:text-white/25'>Book Virtual Survey</Link></li>
            <li className='hover:text-white/25'>Moving FAQ</li>
          </ul>
        </div>

        <div>
          <h1 className='uppercase text-xl font-medium text-white/60 flex items-center mt-8 ml-7'>Help</h1>
          <ul className='text-white/60 cursor-pointer font-thin'>
            <li className='hover:text-white/25'><Link className='no-underline text-white/60 hover:text-white/25' to='/contact'>Contact</Link></li>
            <li className='hover:text-white/25'><Link className='no-underline text-white/60 hover:text-white/25' to='/freequote'>Get a Quote</Link></li>
            <li className='hover:text-white/25'><Link className='no-underline text-white/60 hover:text-white/25' to='/'>Terms and Condition</Link></li>
          </ul>
        </div>
      </div>
      <span className='text-xs text-white/40'>&copy; 2022 Axopolitan Moving. AllRights Reserved.</span>
    </div>
  )
}

export default Footer