import React from 'react'
import { ErrorText } from './styles'

type ErrorType = {
  text: string
}

export const ErrorComponent: React.FC<ErrorType> = (props) => {
  if (!props.text) return null
  return (
    <ErrorText>
      {props.text}
    </ErrorText>
  )
}
