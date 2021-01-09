import React from 'react'
import CheckIcon from '@images/check.svg'
import { ErrorComponent } from '@storybook'
import { CheckboxBorder, CheckboxContainer, CheckboxEl, CheckboxHidden, CheckboxText } from './styles'

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
