import React from 'react'
import { ErrorComponent } from '@storybook'
import { RadioButton, RadioButtonHidden, RadioEllipse, RadioEllipseChecked, RadioLabel } from './styles'

type RadioButtonsType = {
  row?: boolean;
  options: {
    label: string,
    checked: boolean,
    click: () => void,
    id: string
  }[]
  error?: string
}

export const RadioButtons: React.FC<RadioButtonsType> = (props) => {

  if (!props.options.length) return null
  return (
    <>
      <RadioButton row={props.row}>
        {props.options.map((option) => (
          <RadioLabel htmlFor={option.id} key={option.id}>
            <RadioEllipse>
              { option.checked && <RadioEllipseChecked /> }
            </RadioEllipse>
            <RadioButtonHidden
              id={option.id}
              checked={option.checked}
              onChange={option.click}
              type='radio'/>
            {option.label}
          </RadioLabel>
        ))}
      </RadioButton>
      {props.error && <div>
        <ErrorComponent text={props.error} />
      </div>}
    </>
  )
}
