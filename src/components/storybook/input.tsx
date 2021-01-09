import React from 'react'
import { ErrorComponent } from '@storybook'
import { IconContainer, InputContainer, InputEl } from './styles'

type InputType = {
  value: string,
  change: (event: React.ChangeEvent<HTMLInputElement>) => void,
  blur?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  focus?: () => void,
  type?: string,
  icon?: React.ReactNode,
  placeholder?: string,
  error?: string
}

export const Input: React.FC<InputType> = (props) => {
  return (
    <>
      <InputContainer>
        <IconContainer>
          {props.icon}
        </IconContainer>
        <InputEl
          icon={!!props.icon}
          value={props.value}
          type={props.type || 'text'}
          placeholder={props.placeholder}
          onBlur={props.blur}
          onFocus={props.focus}
          onChange={props.change}
        />
      </InputContainer>
      {props.error && <div>
        <ErrorComponent text={props.error} />
      </div>}
    </>
  )
}
