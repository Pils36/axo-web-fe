import React, { useState } from 'react'
import Footer from '../components/Footer'
import LogoMenu from '../components/LogoMenu'
import Nav from '../components/Nav'
import Mobile from "../images/mobile.jpg"
import User from "../images/users.jpg"
import Cells from "../images/cells.jpg"
import { Link } from 'react-router-dom'

const Contact = () => {

    const [active, setActive] = useState (false)
    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div>
        <div className='bg-contact-bg h-screen bg-cover mb-16 md:bg-top bg-center'>
        <div  className='flex justify-between px-20'>
          <LogoMenu />
          <div className='flex gap-20 items-center mx-10 cursor-pointer'>
            {/* <FaSearch className='text-white scale-100' /> */}
              <svg xmlns="http://www.w3.org/2000/svg" onClick={showMenu} className="h-6 w-6 text-white scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
          </div>
        </div>
      <Nav showMenu={showMenu} active={active}/>
            <div className='bg-white mx-20 rounded-t-[100px] pt-16 pb-20 mt-[300px]'>
                <h1 className='text-center text-[#5A96DF] text-3xl font-bold'>let's start a conversation</h1>
                <p className='px-20 text-center'>Ready to experience the best move of your life? See how you can use technology to move smarter <br /> every step of the way. Give us a call at 07043748903 to tell us about your move. You can also <br /> talk about your hopes, dreams, desires, whatever-we're here to listen.</p>
            </div>
        </div>
        <div className='mx-20 mb-16'>
            <h1 className='md:w-72 md:text-4xl my-3 font-extrabold'>Get in touch</h1>
            <p className='md:text-xl font-semibold'>We're ready to quickly answer any questions or concerns. Please select your preferred method below!</p>
            <div className='md:flex justify-center items-center font-[Gotham Book]'>
                <div className='flex-col justify-center items-center px-12 py-4 md:text-center md:items-center md:flex'>
                    <img src={Mobile} alt="" className='scale-50 mb-0 pb-0' />
                    <span className='text-xl font-extrabold'>Talk to a Representative</span>
                    <p className='text-left py-2 pl-6'>Feel free to get in touch with us <br /> anytime. we'd be happy to respond <br /> quickly</p>
                    <a className='bg-[#5A96DF] px-5 py-1 text-white/75 rounded-md hover:bg-blue-400 hover:textlg no-underline' href='tel:+2347043748903'> Call</a>
                    {/* <a  className='text-white text-base font-medium no-underline' href="tel:+2347043748903">07043748903</a> */}
                </div>

                <div className='flex-col justify-center items-center px-12 py-4 md:text-center md:items-center md:flex'>
                    <img src={User} alt="" className='scale-50 mb-0 pb-0' />
                    <span className='text-xl font-extrabold'>Schedule a consultation</span>
                    <p className='text-left py-2 pl-6'>Ready to move now? Not to worry, <br /> our expert consultants would guide <br /> you through a seemless process</p>
                    <Link to='/consultation'><button className='bg-[#5A96DF] px-5 py-1 text-white/75 rounded-md hover:bg-blue-400 hover:textlg'>Start now</button></Link>
                </div>

                <div className='flex-col justify-center items-center px-10 py-4 md:text-center md:items-center md:flex'>
                    <img src={Cells} alt="" className='scale-50 mb-0 pb-0' />
                    <span className='text-xl font-extrabold'>Got questions? Let's call you</span>
                    <p className='text-left py-2 pl-6'>Want to know more about our <br /> moving and storage services? Not <br /> able to speak now. We'll call you.</p>
                    <button className='bg-[#5A96DF] px-5 py-1 text-white/75 rounded-md hover:bg-blue-400 hover:textlg'>Schedule a call</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact