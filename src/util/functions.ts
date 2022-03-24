export const elementsExistsInObject = (obj: object, property: string) => {
  let found = false
  for (const key of Object.keys(obj)) {
    if (key === property) {
      found = true
    }
  }
  return found
}

export const validateEmail = (email: string): boolean | string => {
  let result: boolean | string = 'Invalid Email'
  if (
    email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    result = true
  }
  return result
}
