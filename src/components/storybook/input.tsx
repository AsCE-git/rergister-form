import React from 'react'
import styled, { css } from 'styled-components'
import { ErrorComponent } from './error'

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

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const InputEl = styled('input')<{icon: boolean}>`
  font-size: 14px;
  width: 100%;
  color: #222222;
  background: #F5F8FA;
  height: 50px;
  padding: 0 18px;
  &::placeholder {
    color: #A2A2A2;
  }
  ${props => props.icon && css`
    padding: 0 18px 0 52px;
  `};
`

const IconContainer = styled.div`
  position: absolute;
  left: 18px;
`

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
