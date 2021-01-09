import React from 'react'
import CheckIcon from '@images/check.svg'
import { ErrorComponent } from '@/storybook'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

const CheckboxHidden = styled.input`
  display: none;
`

const CheckboxBorder = styled.div`
  border: 1px solid #0094FF;
  margin: 0 8px 0 0;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  & svg {
    stroke: #0094FF
  }
`

const CheckboxEl = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const CheckboxText = styled.p`
  color: #222222;
  font-size: 14px;
`

type CheckboxType = {
  checked: boolean,
  click: () => void,
  error?: string,
}

export const Checkbox: React.FC<CheckboxType> = (props) => {
  return (
    <>
      <CheckboxContainer>
        <CheckboxEl>
          <CheckboxBorder>
            {props.checked && <CheckIcon />}
          </CheckboxBorder>
          <CheckboxHidden checked={props.checked} onChange={props.click} type='checkbox'/>
          <CheckboxText>
            {props.children}
          </CheckboxText>
        </CheckboxEl>
      </CheckboxContainer>
      {props.error && <div>
        <ErrorComponent text={props.error} />
      </div>}
    </>
  )
}
