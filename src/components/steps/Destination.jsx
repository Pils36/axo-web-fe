import { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'

const Destination = () => {

    const { movingFrom, movingTo, setMovingFrom, setMovingTo } = useContext(StepperContext)

  return (
    <div className='flex flex-col'>
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>Where are you moving?</h1>
            <p className='text-xs font-semibold'>We just need a few details from you to get you a gfree quote.</p>
        </div>

        <div className='border-t border-b border-black/40'>
            <form className='my-8 flex-col'>
                  <input type="text" name="movingFrom" placeholder='Moving From' className='border px-2 my-2' onChange={(e) => setMovingFrom(e.target.value)} value={movingFrom} />
                  <input type="text" name="movingTo" placeholder='Moving To' className='border px-2 my-2' onChange={(e) => setMovingTo(e.target.value)} value={movingTo} />
            </form>
        </div>
    </div>
  )
}

export default Destination