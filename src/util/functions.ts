export const elementsExistsInObject = (obj: object, property: string) => {
  let found = false
  for (const key of Object.keys(obj)) {
    if (key === property) {
      found = true
    }
  }
  return found
}
