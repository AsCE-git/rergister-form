const regLatinLetters = /[^a-z ]/i

export const testLatinLetters = (value: string): boolean => {
  return regLatinLetters.test(value)
}
