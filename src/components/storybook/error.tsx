import React from 'react'
import styled from 'styled-components'

const ErrorText = styled.p`
  margin: 0;
  position: absolute;
  bottom: -15px;
  color: #E82828;
  font-size: 10px;
  padding: 0 0 0 18px;
`

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
