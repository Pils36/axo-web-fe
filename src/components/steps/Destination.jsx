import { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'

const Destination = () => {
    const { userData, setUserData } = useContext(StepperContext)
    const handleChange = (e) =>{
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
    }
  return (
    <div className='flex flex-col'>
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>Where are you moving?</h1>
            <p className='text-xs font-semibold'>We just need a few details from you to get you a gfree quote.</p>
        </div>

        <div className='border-t border-b border-black/40'>
            <form className='my-8 flex-col'>
                <input type="text" placeholder='Moving From' className='border px-2 my-2' />
                <input type="text" placeholder='Moving To' className='border px-2' />
            </form>
        </div>
    </div>
  )
}

export default Destination