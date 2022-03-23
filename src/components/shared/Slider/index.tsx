import { ReactNode } from 'react'
import ReactSlider from 'react-slider'

interface SliderProps {
  children?: ReactNode
  max: number
  min: number
  step: number
  disabled: boolean
  onChange: (value: number, index: number) => void
}

export const Slider: React.FC<SliderProps> = ({
  max,
  min,
  step,
  disabled,
  onChange,
}) => {
  return (
    <ReactSlider
      max={max}
      min={min}
      step={step}
      disabled={disabled}
      onChange={onChange}
      className="my-2 h-10  w-full"
      thumbClassName="bg-white text-grey focus:outline-none cursor-pointer p-1 rounded-full"
      trackClassName="bg-primary mt-3 text-white p-1 rounded-full"
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  )
}
