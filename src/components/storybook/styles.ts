import styled, { css } from 'styled-components'

// button & link

export const ButtonEl = styled.button`
  width: 100%;
  background: ${props => props.theme.button.backgroundColor};
  border-radius: 31px;
  color: ${props => props.theme.button.color};
  font-size: ${props => props.theme.button.fontSize};
  height: ${props => props.theme.button.height};
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9
  }

  ${props => props.disabled && css`
    background: ${props => props.theme.button.disabledColor}
  `};
`

export const LinkEl = styled.a`
  color: ${props => props.theme.link.color};
  font-size: ${props => props.theme.link.fontSize};
`

// -----------------------------------------

// checkbox

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CheckboxHidden = styled.input`
  display: none;
`

export const CheckboxBorder = styled.div`
  border: 1px solid ${props => props.theme.checkbox.borderColor};
  margin: 0 8px 0 0;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  & svg {
    stroke: ${props => props.theme.checkbox.strokeColor};
  }
`

export const CheckboxEl = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const CheckboxText = styled.p`
  color: ${props => props.theme.checkbox.color};
  font-size: ${props => props.theme.checkbox.fontSize};
`
// ----------------------------------------

// error component

export const ErrorText = styled.p`
  margin: 0;
  position: absolute;
  bottom: -15px;
  color: ${props => props.theme.errorComponent.color};
  font-size: ${props => props.theme.errorComponent.fontSize};
  padding: 0 0 0 18px;
`

// ----------------------------------------

// header component

export const H1 = styled('h1')<{isCenter: boolean}>`
  font-size: ${props => props.theme.header.fontSize};
  color: ${props => props.theme.header.color};
  line-height: 34px;

  ${(props) => props.isCenter && css`
    text-align: center;
  `};
`

// ---------------------------------------

// input

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const InputEl = styled('input')<{icon: boolean}>`
  font-size: ${props => props.theme.input.fontSize};
  width: 100%;
  color: ${props => props.theme.input.color};
  background: ${props => props.theme.input.backgroundColor};
  height: ${props => props.theme.input.height};
  padding: 0 18px;
  &::placeholder {
    color: ${props => props.theme.input.placeholderColor};
  }
  ${props => props.icon && css`
    padding: 0 18px 0 52px;
  `};
`

export const IconContainer = styled.div`
  position: absolute;
  left: 18px;
`

// ----------------------------------------

//  radio-button

export const RadioButton = styled('div')<{ row: boolean }>`
  ${(props) => props.row && css`
    display: flex;
    align-items: center;
  `}
`

export const RadioButtonHidden = styled.input`
  display: none
`

export const RadioEllipse = styled.div`
  border-radius: 50%;
  border: 1px solid ${props => props.theme.radioButton.borderColor};
  width: 14px;
  height: 14px;
  padding: 2px;
  margin: 0 8px 0 0;
`
  
export const RadioEllipseChecked = styled.div`
  border-radius: 50%;
  background: ${props => props.theme.radioButton.backgroundColor};
  width: 100%;
  height: 100%;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.radioButton.fontSize};
  margin: 0 25px 0 0;
  cursor: pointer;
`

// ----------------------------------------

// select


export const SelectEl = styled.div`
  position: relative;
`

export const SelectButton = styled('div')<{ isPlaceholder: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
  color: ${props => props.theme.select.color};
  background: ${props => props.theme.select.backgroundColor};
  height: ${props => props.theme.select.height};
  padding: 0 18px;
  cursor: pointer;

  ${(props) => props.isPlaceholder && css`
    color: ${props => props.theme.select.placeholderColor};
  `}
`

export const SelectModal = styled.div`
  width: 100%;
  background: ${props => props.theme.select.backgroundModalColor};
  position: absolute;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 8px;
  z-index: 10;
`

export const SelectOption = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 19px;
  height: ${props => props.theme.select.heightOption};
  color: ${props => props.theme.select.color};
  font-size: ${props => props.theme.select.fontSize};
  transition: background 0.2s;
  background: transparent;
  &:hover {
    background: ${props => props.theme.select.backgroundHover};
  }
`
export const ArrowContainer = styled('div')<{ active: boolean }>`
  transition: transform 0.2s;
  ${(props) => props.active && css`
    transform: rotate(180deg)
  `}
`

// ----------------------------------------
