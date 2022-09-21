import React, { useState, useContext } from 'react'
import LogoMenu from '../components/LogoMenu'
import Nav from '../components/Nav'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import Destination from '../components/steps/Destination'
import HomeSize from '../components/steps/Homesize'
import DayConsult from '../components/steps/DayConsult'
import Final from '../components/steps/Final'
import Reaching from '../components/steps/Reaching'
import { StepperContext } from '../contexts/StepperContext'
import axios from 'axios';
import showMessage from '../helpers/messagealert'
const Quotes = () => {




  const { movingFrom, movingTo, homeSize, myDate, firstname, lastname, email, additionalInfo, phoneNumber, howYouHearAboutUs } = useContext(StepperContext)

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
        return <Destination />
      case 2:
        return <HomeSize />
      case 3:
        return <DayConsult />
      case 4:
        return <Reaching />
      case 5:
        return <Final />
      default:
    }
  }

  const handleClick = async (direction) => {

    let newStep = currentStep

    direction === "next" ? newStep++ : direction === "submit" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)


    if (direction === "submit"){

      if (movingFrom === '' || movingTo === '') {
        showMessage('Oops!', 'Moving From and Moving To cannot be empty.', 'info');
        setCurrentStep(1);
        return displayStep(1);
      }
      if (homeSize === '') {
        showMessage('Oops!', 'Please select your home size', 'info');
        setCurrentStep(2);
        return displayStep(2);
      }
      if (myDate === '') {
        showMessage('Oops!', 'Please select visit date', 'info');
        setCurrentStep(3);
        return displayStep(3);
      }
      if (firstname === '' || lastname === '' || email === '' || phoneNumber === '') {
        showMessage('Oops!', 'Please fill in the details here', 'info');
        setCurrentStep(4);
        return displayStep(4);
      }

      await postFreeQuotes();
    }

  }

  const postFreeQuotes = async () => {
    try {

      const data = {
        movingFrom,
        movingTo,
        homeSize,
        movingDate: new Date(myDate + 'GMT+0'),
        firstName: firstname,
        lastName: lastname,
        email: email,
        howYouHearAboutUs,
        additionalDetails: additionalInfo,
        phoneNumber
      };

      const config = {
        method: 'POST',
        url: process.env.NODE_ENV === 'development' ? 'http://api.axopolitan.com/api/v1/free-quote' : 'https://api.axopolitan.com/api/v1/free-quote',
        headers: {
          'Authorization': 'Bearer base64:LGCVHWAkwbMMqSt6j5FQBpGXGGxs/D8huidrrhZ+GPI=',
          'dev_mode': process.env.NODE_ENV === 'development' ? 'staging' : 'production'
        },
        data
      }

      await axios(config);
      setCurrentStep(5);
      displayStep(5);


    } catch (error) {
      setCurrentStep(4);
      displayStep(4);
      if (error.response) {
        showMessage('Oops!', error.response.data.message, 'error');
      }
      else {
        showMessage('Oops!', error.message, 'error');
      }
    }
  }






  
  return (
    <div> 
        <div className='bg-consult-bg h-screen bg-cover md:bg-top bg-center'>
        <div  className='flex justify-between'>
          <LogoMenu />
          <div className='flex gap-20 items-center mx-10'>
            {/* <FaSearch className='text-white scale-100' /> */}
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
        {/* <Footer /> */}
    </div>
  )
}

export default Quotes