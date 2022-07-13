import { HTMLAttributes } from 'react'
import { Control, Controller, RegisterOptions } from 'react-hook-form'
import { SelectOptions } from '../../../../types/SelectOption'

interface SelectOptionsFieldProps extends HTMLAttributes<HTMLSelectElement> {
  name: string
  control: Control<any, object>
  rules?: Omit<
    RegisterOptions<any, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  classNames?: string
  error?: string
  label?: string
  options: SelectOptions[]
}

export const SelectOptionsField: React.FC<SelectOptionsFieldProps> = ({
  name,
  control,
  rules,
  classNames = '',
  error,
  label,
  options,
  ...props
}) => {
  return (
    <div className="py-1">
      <Controller
        name={name}
        control={control}
        rules={{
          required: {
            value: true,
            message: name + ' is Required',
          },
          ...rules,
        }}
        render={({ field }) => {
          return (
            <div className="w-full">
              {label && (
                <label className="mb-5 text-primary" htmlFor={name}>
                  {label}
                </label>
              )}
              <select
                className={`${
                  error ? 'border-red-400' : 'border-primary focus:border-light'
                } border-paragraph w-full rounded-lg border bg-transparent px-4 py-1 font-light capitalize outline-none md:py-1.5 md:font-medium ${classNames}`}
                id={name}
                {...props}
                {...field}
              >
                <option value="Default" className="text-grey">
                  Select One
                </option>
                {options.map((option) => {
                  return (
                    <option
                      className="capitalize text-grey"
                      key={option.value}
                      value={option.value}
                    >
                      {option.title}
                    </option>
                  )
                })}
              </select>
            </div>
          )
        }}
      />
      {error && <p className="mt-2 text-sm capitalize text-red-400">{error}</p>}
    </div>
  )
}
