import { SelectOptions } from "./SelectOption"

export interface RegistrationForm {
  email: string
  first_name: string
  last_name: string
  role: SelectOptions
  tags: string
}
