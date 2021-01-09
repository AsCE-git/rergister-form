import React from 'react'
import styled, { css } from 'styled-components'

const ButtonEl = styled.button`
  width: 100%;
  background: #0094FF;
  border-radius: 31px;
  color: #FFFFFF;
  font-size: 18px;
  height: 62px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9
  }

  ${props => props.disabled && css`
    background: #A2A2A2
  `};
`

const LinkEl = styled.a`
  color: #0094FF;
  font-size: 14px;
`

type ButtonType = {
  click: (evt: React.SyntheticEvent) => void,
  disabled?: boolean,
  link?: boolean,
  href?: string,
  text: string,
}

export const Button: React.FC<ButtonType> = (props) => {
  if (props.link) {
    return (
      <LinkEl
        onClick={props.click}
        href={props.href}>
        {props.text}
      </LinkEl>
    )
  }
  return (
    <ButtonEl
      onClick={props.click}
      disabled={props.disabled}>
      {props.text}
    </ButtonEl>
  )
}
