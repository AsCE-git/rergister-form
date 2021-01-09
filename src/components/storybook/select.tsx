import React from 'react'
import { ErrorComponent } from '@/storybook'
import ArrowIcon from '@images/arrow.svg'
import styled, { css } from 'styled-components'

const SelectEl = styled.div`
  position: relative;
`

const SelectButton = styled('div')<{ isPlaceholder: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
  color: #222222;
  background: #F5F8FA;
  height: 50px;
  padding: 0 18px;
  cursor: pointer;

  ${(props) => props.isPlaceholder && css`
    color: #A2A2A2
  `}
`

const SelectModal = styled.div`
  width: 100%;
  background: #FFFFFF;
  position: absolute;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 8px;
  z-index: 10;
`

const SelectOption = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 19px;
  height: 36px;
  color: #222222;
  font-size: 14px;
  transition: background 0.2s;
  background: transparent;
  &:hover {
    background: #F5F8FA;
  }
`
const ArrowContainer = styled('div')<{ active: boolean }>`
  transition: transform 0.2s;
  ${(props) => props.active && css`
    transform: rotate(180deg)
  `}
`

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
