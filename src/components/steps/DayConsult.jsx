import React, { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import { Calendar } from 'react-calendar'
import '../calendar.css'


const DayConsult = () => {

  const { myDate, setMyDate } = useContext(StepperContext)

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>When is your move date?</h1>
        <p className='text-xs font-semibold'>Almost there... You're really moving along</p>
      </div>

      <div className='flex items-center justify-center'>
        <div>
          <Calendar className='react-calendar scale-75' onChange={setMyDate} value={myDate} />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default DayConsult