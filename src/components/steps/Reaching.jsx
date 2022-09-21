import React, {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'

const Reaching = () => {

    const { firstname, lastname, email, additionalInfo, setFirstName, setLastName, setEmail, setAdditionalInfo, phoneNumber, setPhoneNumber, howYouHearAboutUs, sethowYouHearAboutUs } = useContext(StepperContext)




  return (
    <div>
        <div className='text-center border-b border-b-black/40'>
            <h1 className='text-2xl font-bold'>How can we reach you?</h1>
            <p className='text-xs font-semibold mb-1'>You did it! Let us know a little bit about you and where to send you quote.</p>
        </div>

        <div>
            <div className='flex gap-20 my-3'>
                <input type="text" placeholder='First Name' className='border px-2'  onChange={(e) => setFirstName(e.target.value)} value={firstname}/>
                  <input type="text" placeholder='Last Name' className='border px-2' onChange={(e) => setLastName(e.target.value)} value={lastname} />
            </div>
              <div className="my-3">
                  <input type="text" placeholder='Email' className='border px-2' onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

              <div className="my-3">
                  <input type="text" placeholder='Phone Number' className='border px-2' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
              </div>

              <div className="my-3">
                  <input type="text" placeholder='How did you hear about us?' className='border px-2' onChange={(e) => sethowYouHearAboutUs(e.target.value)} value={howYouHearAboutUs} />
              </div>

            <div>
                  <textarea className='border italic text-sm px-2 focus:outline-none' placeholder='Additional Information' cols="75" rows="3" onChange={(e) => setAdditionalInfo(e.target.value)} value={additionalInfo} ></textarea>
            </div>
        </div>
    </div>
  )
}

export default Reaching