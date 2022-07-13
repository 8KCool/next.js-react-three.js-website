import React, { FC, useState, useEffect, useRef } from 'react'

interface StepperPros {
    steps: Array<any>,
    currentStepNumber: number
}

interface Step {
    description: any,
    completed: boolean,
    highlighted: boolean,
    selected: boolean,
}

const Stepper: FC<StepperPros> = ({ steps, currentStepNumber }) => {
	const [stepperSteps, setStep] = useState<Array<Step>>([]);
	const stepsStateRef = useRef<Array<Step>>([]);

	useEffect(() => {
		const stepsState = steps.map((step, index) : Step => {
			return {
                description: step,
                completed: false,
                highlighted: index === 0 ? true : false,
                selected: index === 0 ? true : false,
            };
		});

		stepsStateRef.current = stepsState
		const currentSteps = updateStep(currentStepNumber - 1, stepsState)
		setStep(currentSteps)
	}, [steps, currentStepNumber]);

	useEffect(() => {
		const currentSteps = updateStep(currentStepNumber - 1, stepsStateRef.current)
		setStep(currentSteps)
	}, [currentStepNumber]);
    
	function updateStep(stepNumber: number, steps: Array<Step>) : Array<Step> {
		const newSteps = [...steps];
		let stepCounter = 0;
		while (stepCounter < newSteps.length) {
			//current step 
			if (stepCounter === stepNumber) {
				newSteps[stepCounter] = {
					...newSteps[stepCounter],
					highlighted: true,
					selected: true,
					completed: false
				};
				stepCounter++;
			}
			// Past step
			else if (stepCounter < stepNumber) {
				newSteps[stepCounter] = {
					...newSteps[stepCounter],
					highlighted: false,
					selected: true,
					completed: true
				};
				stepCounter++;
			}
			// Future steps 
			else {
				newSteps[stepCounter] = {
					...newSteps[stepCounter],
					highlighted: false,
					selected: false,
					completed: false
				}
				stepCounter++;
			}
		}
		return newSteps
	}
	const stepsDisplay = stepperSteps.map((step, index) => {
		return (
			<div key={index}
				className={index !== stepperSteps.length - 1 ? "w-full flex items-center" : "flex items-center"} >
				<div className="relative flex flex-col items-center text-teal-600">
					<div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${step.selected ? "bg-green-600 text-white font-bold" : ""}`}>
						{step.completed ? <span className="text-white font-bold text-xl bg-green-600">✓</span> : index + 1}
					</div>
					<div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted ? "text-white" : "text-grey-400"}`}> {step.description}	</div>
				</div>
				<div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300 "> </div>
			</div>
		)
	})
	return (
		<div className="mx-4 p-4 flex justify-between items-center">
			{stepsDisplay}
		</div>
	)
}

export default Stepper
