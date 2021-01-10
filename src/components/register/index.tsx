import React from 'react'
import EmailIcon from '@images/email.svg'
import LockIcon from '@images/lock.svg'
import {
  Input,
  Select,
  Header,
  Checkbox,
  RadioButtons,
  Button,
} from '@storybook'
import { useMutation } from '@apollo/client';
import { testLatinLetters, checkValidEmail, countries } from '@/helpers'
import { REGISTER } from '@api/register'
import { ErrorType, GenderEnum, StateType } from './types'

export const Register: React.FC = () => {

  const defaultState = {
    email: '',
    password: '',
    name: '',
    country: '',
    gender: GenderEnum.MALE,
    isAcceptedPrivacy: false,
  }

  const defaultErrorState = {
    email: false,
    password: false,
    name: false,
    country: false,
    gender: false,
    isAcceptedPrivacy: false,
  }

  const [state, setState] = React.useState<StateType>(defaultState)
  const [errorState, setError] = React.useState<ErrorType>(defaultErrorState)

  const [ signup, { loading } ] = useMutation(REGISTER)
  
  const handleRegister = () => {
    const {email, password, name, country, gender} = state

    signup({variables: {email, password, name, country, gender}})
      .then((res) => window.alert(`Success!!! id: ${res.data.signup.id}`))
      .catch((e) => window.alert(e.message))
  }

  const checkField = (type: string, value: boolean) => {
    setError({ ...errorState, [type]: value })
  }

  const setCountry = (value: string) => {
    if (errorState.country) {
      checkField('country', false)
    }
    setState({ ...state, country: value })
  }

  const setGender = (type: GenderEnum) => {
    return () => setState({ ...state, gender: type })
  }

  const handlePrivacyChecked = () => {
    if (state.isAcceptedPrivacy) {
      checkField('isAcceptedPrivacy', true)
    } else {
      checkField('isAcceptedPrivacy', false)
    }
    setState({ ...state, isAcceptedPrivacy: !state.isAcceptedPrivacy })
  }

  const resetCountry = () => {
    if (state.country) {
      setState({ ...state, country: '' })
    }
    checkField('country', true)
  }

  const isDisabledButton = (): boolean => {
    const { email, password, name, country, gender, isAcceptedPrivacy } = state
    const isInvalid = Object.values(errorState).filter(_ => _).length
    if (loading || isInvalid || !email || !password || !name || !country || !gender || !isAcceptedPrivacy) {
      return true
    }
    return false
  }

  const handleChange = (type: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => (
      setState({...state, [type]: event.target.value})
    )
  }
  
  return (
    <div className='register'>
      <div className='register__container'>

        <div className='register__block register__block__header'>
          <Header h1 center text='Create a new account' />
        </div>

        <div className='register__block'>
          <Input
            placeholder='Enter your name'
            value={state.name}
            blur={(evt: React.ChangeEvent<HTMLInputElement>) => checkField('name', testLatinLetters(evt.target.value))}
            change={handleChange('name')}
            error={errorState.name && 'Please enter a valid name'}
            />
        </div>

        <div className='register__block'>
          <Input
            placeholder='Email'
            value={state.email}
            blur={(evt: React.ChangeEvent<HTMLInputElement>) => evt.target.value && checkField('email', !checkValidEmail(evt.target.value))}
            icon={<EmailIcon />}
            change={handleChange('email')}
            error={errorState.email && 'Please enter a valid email address'}
            />
        </div>
        
        <div className='register__block'>
          <Input
            placeholder='Password'
            value={state.password}
            blur={(evt: React.ChangeEvent<HTMLInputElement>) => evt.target.value && checkField('password', evt.target.value.length < 6)}
            icon={<LockIcon />}
            type='password'
            change={handleChange('password')}
            error={errorState.password && 'Password must contain at least 6 symbols'}
          />
        </div>

        <div className='register__block'>
          <Select
            reset={resetCountry}
            options={countries}
            activeOption={state.country}
            defaultValue='Select country'
            click={setCountry}
            error={errorState.country && 'You must select your country'}
          />
        </div>

        <div className='register__block register__block__radio'>
          <RadioButtons
            row
            options={[{
              id: GenderEnum.MALE,
              label: 'Male',
              checked: state.gender === GenderEnum.MALE,
              click: setGender(GenderEnum.MALE)
            },{
              id: GenderEnum.FEMALE,
              label: 'Female',
              checked: state.gender === GenderEnum.FEMALE,
              click: setGender(GenderEnum.FEMALE)
            },]}
            error={errorState.gender && 'You must select the gender'}
          />
        </div>

        <div className='register__block'>
          <Checkbox
            checked={state.isAcceptedPrivacy}
            click={handlePrivacyChecked}
            error={errorState.isAcceptedPrivacy && 'You must accept the policies'}
          >
            Accept <Button
                text='terms'
                link
                click={(evt: React.SyntheticEvent) => {
                  evt.preventDefault()
                  console.log('terms')
                }}
                /> and <Button
                text='conditions'
                link
                click={(evt: React.SyntheticEvent) => {
                  evt.preventDefault()
                  console.log('conditions')
                }}
              />
          </Checkbox>
        </div>

        <div className='register__block register__block__button'>
          <Button
            text={loading && 'Pending...' || 'Sign up'}
            click={handleRegister}
            disabled={isDisabledButton()}
          />
        </div>

      </div>
    </div>
  )
}
