import React from 'react'
import { Link } from 'react-router-dom' 

const FreeQuote = () => {
    return (
        <div>
            <Link to='/freequote' className='no-underline flex hover:text-white/30'><button className="text-white/90 text-lg font-semibold flex px-8 py-2 my-3 capitalize bg-gradient-to-r from-[#3224AFCC] via-[#3927B1] to-[#C46BD6] rounded-md">get a free quote <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></button></Link>
        </div>
    )
} 

export default FreeQuote
