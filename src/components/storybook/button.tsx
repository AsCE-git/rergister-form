import React from 'react'
import { LinkEl, ButtonEl } from './styles'

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
