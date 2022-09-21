import React, { useState, useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { StepperContext } from '../contexts/StepperContext'
import LogoMenu from '../components/LogoMenu'
import Nav from '../components/Nav'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import ConsultDestination from '../components/steps/ConsultDestination'
import ConsultHomeSize from '../components/steps/ConsultHomeSize'
import Final from '../components/steps/Final'
import ConsultReaching from '../components/steps/ConsultReaching'
import axios from 'axios';
import Day from '../components/steps/Day'

const Consultation = () => {

  const { movingFrom, movingTo, homeSize, myDate, firstname, lastname, email, additionalInfo, phoneNumber, howYouHearAboutUs, visitTime, modeOfVisit, address } = useContext(StepperContext)

    const [active, setActive] = useState (false)
    const showMenu = () => {
        setActive(!active)
    }
  
    const [currentStep, setCurrentStep] = useState(1)
  
    const steps = [
      "",
      "",
      "",
      "",
      "" 
    ]
  
    const displayStep =  (step) => {
      switch(step) {
        case 1:
          return <ConsultDestination />
        case 2:
          return <ConsultHomeSize />
        case 3:
            return <Day />
        case 4:
          return <ConsultReaching />
        case 5:
          return <Final />
          default:
      }
    }
  
    const handleClick = async (direction) => {
      let newStep = currentStep
  
      direction === "next" ? newStep++ : newStep--
  
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)

      if (newStep > 4) {
        await postFreeQuotes();
      }
    }


  const postFreeQuotes = async () => {
    try {

      const data = {
        movingFrom,
        movingTo,
        homeSize,
        visitDate: new Date(myDate + 'GMT+0'),
        firstName: firstname,
        lastName: lastname,
        email: email,
        howYouHearAboutUs,
        additionalDetails: additionalInfo,
        phoneNumber,
        visitTime, 
        modeOfVisit,
        address
      };

      const config = {
        method: 'POST',
        url: process.env.NODE_ENV === 'development' ? 'http://api.axopolitan.com/api/v1/survey' : 'https://api.axopolitan.com/api/v1/survey',
        headers: {
          'Authorization': 'Bearer base64:LGCVHWAkwbMMqSt6j5FQBpGXGGxs/D8huidrrhZ+GPI=',
          'dev_mode': process.env.NODE_ENV === 'development' ? 'staging' : 'production'
        },
        data
      }

      const result = await axios(config);

      console.log(result);

      displayStep(5);


    } catch (error) {
      console.log(error);
    }
  }

    return (
        <div>
            <div className='bg-consult-bg h-screen bg-cover md:bg-top bg-center'>
        <div  className='flex justify-between'>
          <LogoMenu />
          <div className='flex gap-20 items-center mx-10 cursor-pointer'>
            <FaSearch className='text-white scale-100' />
              <svg xmlns="http://www.w3.org/2000/svg" onClick={showMenu} className="h-6 w-6 text-white scale-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
          </div>
        </div>
      <Nav showMenu={showMenu} active={active}/>
          

          {/* form is coming here */}

          <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
            <div className='container horizontal mt-5'>
              <Stepper 
                steps = {steps}
                currentStep={currentStep}
              />

              <div className='px-10'>
                  {displayStep(currentStep)}
              </div>
            </div>
            {currentStep !== steps.length && 
            <StepperControl 
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />}
          </div>

          {/* form ends here */}
        </div>
        </div>
    )
}

export default Consultation
