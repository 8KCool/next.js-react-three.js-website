import { HTMLAttributes } from 'react'
import { Control, Controller, RegisterOptions } from 'react-hook-form'
// import { ContactUsFormValues } from '../../../../types/ContactUsFormValues'
// import { SubscribeForm } from '../../../../types/SubscribeForm'

interface FileInputFieldProps extends HTMLAttributes<HTMLInputElement> {
  name: string
  control: Control<any, any>
  value?: Array<File>
  rules?: Omit<
    RegisterOptions<any, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  classNames?: string
  error?: string
  label?: string
  border?: string
}

export const FileInputFiled: React.FC<FileInputFieldProps> = ({
  name,
  control,
  value,
  rules,
  classNames = '',
  border = '',
  error,
  label,
  ...props
}) => {
  return (
    <div className="py-1">
      <Controller
        name={name as any}
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
              {value && Boolean(value.length) && (
                <div>Selected files: {value.map((f) => f.name).join(', ')}</div>
              )}
              {label && (
                <label className="mb-5 text-primary" htmlFor={name}>
                  {label}
                </label>
              )}
              <input
                className={`${
                  error
                    ? 'border-red-400'
                    : border
                    ? border
                    : 'border-primary focus:border-light'
                } border-paragraph w-full rounded-lg border bg-transparent px-4 py-1 font-light outline-none md:py-1.5 md:font-medium ${classNames}`}
                id={name}
                type="file"
                {...props}
                {...field}
              />
            </div>
          )
        }}
      />
      {error && <p className="mt-2 text-sm capitalize text-red-400">{error}</p>}
    </div>
  )
}
