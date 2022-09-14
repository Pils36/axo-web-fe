import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { StepperContext } from '../contexts/StepperContext'
import LogoMenu from '../components/LogoMenu'
import Nav from '../components/Nav'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import Destination from '../components/steps/Destination'
import HomeSize from '../components/steps/Homesize'
import Final from '../components/steps/Final'
import Reaching from '../components/steps/Reaching'
import Day from '../components/steps/Day'

const Consultation = () => {
    const [active, setActive] = useState (false)
    const showMenu = () => {
        setActive(!active)
    }
  
    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUSerData] = useState ('')
    const [finalData, setFinalData] = useState ([])
  
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
          return <Destination />
        case 2:
          return <HomeSize />
        case 3:
            return <Day />
        case 4:
          return <Reaching />
        case 5:
          return <Final />
          default:
      }
    }
  
    const handleClick = (direction) => {
      let newStep = currentStep
  
      direction === "next" ? newStep++ : newStep--
  
      newStep > 0 && newStep < steps.length && setCurrentStep(newStep)
    }
    return (
        <div>
            <div className='bg-consult-bg h-screen bg-cover md:bg-top bg-center'>
        <div  className='flex justify-between'>
          <LogoMenu />
          <div className='flex gap-20 items-center mx-10 cursor-pointer'>
            <FaSearch className='text-white scale-100' />
              <svg xmlns="http://www.w3.org/2000/svg" onClick={showMenu} className="h-6 w-6 text-white scale-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
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
                <StepperContext.Provider value={{
                  userData,
                  setUSerData,
                  finalData,
                  setFinalData
                }}>
                  {displayStep(currentStep)}
                </StepperContext.Provider>
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
