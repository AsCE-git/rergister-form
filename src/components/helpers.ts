import isValidEmail from 'isemail'

const regLatinLetters = /[^a-z ]/i

export const testLatinLetters = (value: string): boolean => {
  return regLatinLetters.test(value)
}

export const checkValidEmail = (value: string): boolean => {
  return isValidEmail.validate(value, { minDomainAtoms: 2 })
}
