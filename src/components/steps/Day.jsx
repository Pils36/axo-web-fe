import React, {useState} from 'react'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Day = () => {

    const [date, setDate] = useState(new Date())
  return (
    <div>
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>When can we pay a visit?</h1>
            <p className='text-xs font-semibold'>On-site or Virtual? Let us know when you'd like to have the consultation with us</p>
        </div>

        <div className='flex'>
          <div>
              <Calendar className='scale-50 mt-0 pt-0 border text-[#3224AFCC]' onChange={setDate} value={date}/>
          </div>
          <div className='flex-col justify-center items-center py-10'>
            <h1 className='font-bold text-sm'>Select Time Range</h1>
            <form>
              <div>
                <input type="radio" className='w-2 h-2 mr-3' />
                <span className='text-sm'>8:00 - 10:00 AM</span>
              </div>
              <div>
                <input type="radio" className='w-2 h-2 mr-3' />
                <span className='text-sm'>10:00 - 12:00 PM</span>
              </div>
              <div>
                <input type="radio" className='w-2 h-2 mr-3'/>
                <span className='text-sm'>12:00 - 2:00 PM</span>
              </div>
              <div>
                <input type="radio" className='w-2 h-2 mr-3'/>
                <span className='text-sm'>2:00 - 4:00 PM</span>
              </div>
              <div>
                <input type="radio" className='w-2 h-2 mr-3'/>
                <span className='text-sm'>4:00 - 6:00 PM</span>
              </div>
              <div>
                <input type="radio"  className='w-2 h-2 mr-3'/>
                <span className='text-sm'>6:00 - 7:00 PM</span>
              </div>
            </form>
          </div>
        </div>
        <div>
            
        </div>
    </div> 
  )
}

export default Day