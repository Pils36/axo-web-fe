import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import QuoteBtn from "../components/Buttons/QuoteBtn"
import LogoMenu from './LogoMenu'
import { FaSearch } from 'react-icons/fa';
import FreeQuote from './Buttons/FreeQuote'
import Search from './searchbar/Search'
 
const Header = () => {

  const [active, setActive] = useState (false)
    const showMenu = () => {
        setActive(!active)
    }


  return (
    <div className='bg-hero-image h-screen bg-cover md:bg-top bg-center md:pl-12'>
        <div  className='flex justify-between'>
          <LogoMenu />
          <div className='flex gap-20 items-center mx-10 cursor-pointer'>
            <div>
              <Search /> 
              {/* <FaSearch className='text-white scale-100' /> */}
            </div>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={showMenu} className="h-6 w-6 text-white scale-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg> 
          </div>
        </div>
      <Nav showMenu={showMenu} active={active}/> 
        <h2 className='text-white pl-10 text-4xl md:text-6xl font-medium pt-24'>A Truly Moving</h2>
        <span className='text-white pl-10 text-4xl md:text-6xl font-medium pt-14'> Experince</span>
              <p className='text-white pl-10 text-2xl p-[10px] md:text-[22px]'>Moving day should always be a celebration!</p>
              <div className='mx-10 my-3'>
                <form className='bg-white mr-[350px] py-1 flex gap-8'>
                  <div className='w-56 px-3 py-2 ml-3 rounded-md'>
                    <span className='pl-2 text-base font-extrabold uppercase'>Moving From</span>
                    <input type="text" placeholder='Enter Current Address' className='text-black pl-2 focus:bg-gray-300 rounded-md'/>
                  </div>
                    {/* <div className='w-1 h-2'></div> */}
                  <div className='w-56 px-3 py-2 ml-1 rounded-md'>
                    <span className='pl-2 text-base font-extrabold uppercase'>Moving To</span>
                    <input type="text" placeholder='Enter Destination' className='text-black pl-2 focus:bg-gray-300 rounded-md'/>
                  </div>
                  <FreeQuote />
                </form>
              </div>
              {/* <div className="hidden md:destination-addres-add">
                <div className="md:row"> 
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="address-content-hold border-right">
                      <label>Moving From</label>
                      <div className="margin-top-10">
                        <input 
                          type="text"
                          value=""
                          className="special_char_restrict contact_fields"
                          name="address"
                          placeholder="Enter Current Address" 
                          text-white/90 bg-gradient-to-r from-[#3224AFCC] via-[#3927B1] to-[#C46BD6] rounded-md
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="address-content-hold">
                      <label>Moving To</label>
                      <div className="margin-top-10">
                        <input
                          type="text"
                          value=""
                          className="special_char_restrict contact_fields"
                          name="address"
                          placeholder="Enter Destination"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="address-btn-hold">
                      <a href="/get-free-quote">
                        Get A Free Quote
                        <i
                          className="fa fa-long-arrow-right"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
    </div>
  )
}

export default Header