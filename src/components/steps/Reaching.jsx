import React from 'react'

const Reaching = () => {
  return (
    <div>
        <div className='text-center border-b border-b-black/40'>
            <h1 className='text-2xl font-bold'>How can we reach you?</h1>
            <p className='text-xs font-semibold mb-1'>You did it! Let us know a little bit about you and where to send you quote.</p>
        </div>

        <div>
            <form className='flex gap-20 my-3'>
                <input type="text" placeholder='First Name' className='border px-2' />
                <input type="text" placeholder='Last Name' className='border px-2'/>
            </form>
            <div>
                <input type="text" placeholder='Email' className='border px-2'/>
            </div>
            <div>
                <option value=""></option>
            </div>

            <div>
                <textarea className='border italic text-sm px-2 focus:outline-none' placeholder='Additional Information' cols="75" rows="3"></textarea>
            </div>
        </div>
    </div>
  )
}

export default Reaching