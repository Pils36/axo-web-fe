import React from 'react'
import { Link } from 'react-router-dom'

const GetQuoye = () => {
  return (
    <div>
        <button><Link to='/freequote' className='no-underline text-white bg-gradient-to-r from-[#4666CA] to-[#603182] px-4 py-2 rounded-md'>Get a Quote!</Link></button>
    </div>
  )
}

export default GetQuoye