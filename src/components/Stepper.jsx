import React, {useState, useEffect, useRef} from 'react'



const Stepper = ({steps, currentStep}) => {
    const [newStep, setNewStep] = useState([])
    const stepRef = useRef()

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps]
        let count = 0
        
        while(count < newSteps.length){
            if(count === stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true
                }
                count++
            }
            else if(count < stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true
                }
                count++
            }
            else{
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false
                }
                count++
            }
        }
        return newSteps
    }

    useEffect(()=>{
        const stepState =steps.map((step, index) =>
            Object.assign({}, {
                description: step,
                completed: false,
                highlighted: index === 0 ? true : false,
                selected: index === 0 ? true : false,
            })
        )

        stepRef.current = stepState
        const current = updateStep(currentStep -1, stepRef.current)
        setNewStep(current)
    }, [steps, currentStep])

    const displaySteps = newStep.map((step, index) => {
        return (
            <div key={index} className={
                index !== newStep.length -1 ? 'w-full flex items-center' : "flex items-center"}>
            <div className='relative flex items-center text-[#3927B1]'>
                <div className={`rounded-full transition- duration-500 ease-in-out border-2 border-gray-300 h-10 w-10 flex items-center justify-center ${step.selected ? "bg-gradient-to-r from-[#3224AFCC] via-[#3927B1] to-[#C46BD6] text-white font-bold border border-[#3927B1]" : ""}`}>
                    {/* displaying numbers */}
                    {step.completed ? (
                        <span className='text-white font-bold text-xl'>&#10003;</span>
                    ): (index +1)}
                </div>
    
                <div className={`absolute top-0 text-center text-xs font-medium uppercase ${step.highlighted ? "text-gary-900" : "text-gray-400"}`}>
                    {/* Display description */}
                    {step.description}
                </div> 
            </div>
            <div className={`flex-auto border-t-4 transition duration-500 ease-in-out ${step.completed ? "border-[#3927B1]" : "border-gray-300"}`}>
                {/* display line */}
            </div>
        </div>
    )
    } )
    

  return (
    <div className='mx-4 p-4 flex justify-between items-center'>
        {displaySteps}
    </div>
  )
}

export default Stepper