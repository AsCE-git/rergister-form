import React from 'react'
import { H1 } from './styles'

enum HeaderOptions {
  h1,
  h2,
  h3
  // also, I can use more variables for more options
}
type HeaderType = {
  [k in keyof typeof HeaderOptions]?: boolean;
}
interface HeaderInterface extends HeaderType {
  text: string,
  center?: boolean
}

export const Header: React.FC<HeaderInterface> = (props) => {
  if (props.h1) {
    return (
      <H1 isCenter={props.center}>
        {props.text}
      </H1>
    )
  }
}
