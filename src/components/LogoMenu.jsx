import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/logonew.png"

const LogoMenu = () => { 
  return (
    <div>
      <div>
        <div className="flex gap-12">
        <Link to='/' className='no-underline'>
              <div className='flex md:flex'>
                  <div className='md:flex items-center'>
                      <img src={Logo} alt=""  className='text-white scale-75'/>
                  </div>
                </div>
                </Link>
                <div className='flex items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6 scale-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                  <a  className='text-white text-base font-medium no-underline' href="tel:+2347043748903">07043748903</a>
                </div>
          </div>    
      </div>
    </div>
  )
}

export default LogoMenu