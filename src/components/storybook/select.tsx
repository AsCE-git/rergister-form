import React from 'react'
import { ErrorComponent } from '@storybook'
import ArrowIcon from '@images/arrow.svg'
import { ArrowContainer, SelectButton, SelectEl, SelectModal, SelectOption } from './styles'

interface SelectType {
  options: Readonly<string[]>;
  activeOption: string;
  defaultValue: string;
  error: string;
  click: (value: string) => void
  reset: () => void
}

export const Select: React.FC<SelectType> = (props) => {
  const [isModal, setModal] = React.useState(false)
  const [isCursor, setCursor] = React.useState(false)
  return (
    <>
    <SelectEl
      onMouseLeave={() => setCursor(false)}
      onMouseEnter={() => setCursor(true)}>

      <SelectButton
        isPlaceholder={!props.activeOption}
        onClick={() => setModal(!isModal)}>
        {props.activeOption || props.defaultValue}
        <ArrowContainer active={isModal}>
          <ArrowIcon />
        </ArrowContainer>
      </SelectButton>
      
      {isModal && <SelectModal
        tabIndex={0}
        onBlur={() => !isCursor && setModal(false)}
        ref={(node) => node && node.focus()}>
        <SelectOption
          onClick={() => {
            props.reset()
            setModal(false)
          }}>
          Reset
        </SelectOption>
        {props.options.map((option) => {
          return (
            <SelectOption
              key={option}
              onClick={() => {
                props.click(option)
                setModal(false)
                setCursor(false)
              }}>
              {option}
            </SelectOption>
          )
        })}
      </SelectModal>}

    </SelectEl>

      {props.error && <div>
        <ErrorComponent text={props.error} />
      </div>}
    </>
  )
}
