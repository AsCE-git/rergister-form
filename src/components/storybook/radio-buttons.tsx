import React from 'react'
import { ErrorComponent } from '@/storybook'
import styled, { css } from 'styled-components'

const RadioButton = styled('div')<{ row: boolean }>`
  ${(props) => props.row && css`
    display: flex;
    align-items: center;
  `}
`

const RadioButtonHidden = styled.input`
  display: none
`

const RadioEllipse = styled.div`
  border-radius: 50%;
  border: 1px solid #0094FF;
  width: 14px;
  height: 14px;
  padding: 2px;
  margin: 0 8px 0 0;
`
  
  const RadioEllipseChecked = styled.div`
  border-radius: 50%;
  background: #0094FF;
  width: 100%;
  height: 100%;
`

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0 25px 0 0;
  cursor: pointer;
`

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
          <Label htmlFor={option.id} key={option.id}>
            <RadioEllipse>
              { option.checked && <RadioEllipseChecked /> }
            </RadioEllipse>
            <RadioButtonHidden
              id={option.id}
              checked={option.checked}
              onChange={option.click}
              type='radio'/>
            {option.label}
          </Label>
        ))}
      </RadioButton>
      {props.error && <div>
        <ErrorComponent text={props.error} />
      </div>}
    </>
  )
}
