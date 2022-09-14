import React, {useState} from 'react'

const Homesize = () => {
  return (
    <div className=''>
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>What is your home size?</h1>
            <p className='text-xs font-semibold'>This ensures we're rightly prepared for your move.</p>
        </div>

        <div className='flex-col px-48 items-center'>
          <div className='flex items-center my-2'>
            <input className='w-4 h-4 mx-3' type="checkbox"/>
            <span className='font-semibold'>Studio</span>
          </div>

          <div className='flex items-center my-2'>
            <input className='w-4 h-4 mx-3' type="checkbox"/>
            <span className='font-semibold'>1 Bedroom</span>
          </div>

          <div className='flex items-center my-2'>
            <input className='w-4 h-4 mx-3' type="checkbox"/>
            <span className='font-semibold'>2 Bedrooms</span>
          </div>

          <div className='flex items-center my-2'>
            <input className='w-4 h-4 mx-3' type="checkbox"/>
            <span className='font-semibold'>3 Bedrooms</span>
          </div>

          <div className='flex items-center my-2'>
            <input className='w-4 h-4 mx-3' type="checkbox"/>
            <span className='font-semibold'>4+ Bedrooms</span>
          </div>
          <input type="text" className='border text-xs px-2 mx-2'  placeholder='Other...'/>
        </div>
    </div>
  )
}

export default Homesize