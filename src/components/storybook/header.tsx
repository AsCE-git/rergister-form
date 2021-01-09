import React from 'react'
import styled, { css } from 'styled-components'

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

const H1 = styled('h1')<{isCenter: boolean}>`
  font-size: 28px;
  color: #222222;
  line-height: 34px;

  ${(props) => props.isCenter && css`
    text-align: center;
  `};
`

export const Header: React.FC<HeaderInterface> = (props) => {
  if (props.h1) {
    return (
      <H1 isCenter={props.center}>
        {props.text}
      </H1>
    )
  }
}
