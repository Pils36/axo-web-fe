import React from 'react'

const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='flex justify-between mx-10 mt-4 mb-4'>
        {/* back button */}
        <button onClick={()=>handleClick()} className={`bg-gradient-to-r from-[#3224AFCC] via-[#3927B1] to-[#C46BD6] text-slate-400 capitalize py-2 px-4 rounded-md font-semibold cursor-pointer ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>back</button>


        {/* next button */}
      <button onClick={() => handleClick(currentStep === steps.length - 1 ? "submit" : "next")} className='bg-gradient-to-r from-[#3224AFCC] via-[#3927B1] to-[#C46BD6] text-white capitalize py-2 px-4 rounded-md font-semibold cursor-pointer'>{currentStep === steps.length - 1 ? "Submit" : "Next"}</button>
    </div>
  )
} 

export default StepperControl