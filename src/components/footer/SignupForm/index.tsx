import { ReactNode } from 'react'

interface SignupFormProps {
  children?: ReactNode
}

export const SignupForm: React.FC<SignupFormProps> = () => {
  return (
    <div className="px-10 opacity-50 md:mt-5 lg:mt-0">
      <h6 className="py-2 text-center text-xl font-semibold sm:text-2xl lg:text-left">
        Sign up Today
      </h6>
      <form className="space-y-3 pr-5">
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-semibold sm:text-xl"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            className="w-full rounded-xl border border-light bg-transparent p-2 lg:w-4/5"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="telegram"
            className="block text-sm font-semibold sm:text-xl"
          >
            Telegram
          </label>
          <input
            id="telegram"
            name="telegram"
            className="w-full rounded-xl border border-light bg-transparent p-2 lg:w-4/5"
          />
        </div>
        <button className="rounded-xl bg-primary px-4 py-1.5 text-xl font-semibold text-light">
          Sign up
        </button>
      </form>
    </div>
  )
}
