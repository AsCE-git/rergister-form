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
} from '@/storybook'
import { useMutation, gql } from '@apollo/client';
import { testLatinLetters } from './helpers'
import isValidEmail from 'isemail'

const countries = ['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya']

const REGISTER = gql`
  mutation createUser($email: String!, $password: String!, $fullName: String!, $country: String, $phone: String, $location: String, $birthDate: DateTime) {
  createUser(input: {
    email: $email,
    password: $password,
    fullName: $fullName,
    country: $country,
    phone: $phone,
    location: $location,
    birthDate: $birthDate }) {
      token
    }
}
`

enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

type StateType = {
  email: string,
  password: string,
  fullName: string,
  country: string,
  gender: GenderEnum,
  isAcceptedPrivacy: boolean
}

type ErrorType = {
  email: boolean,
  password: boolean,
  fullName: boolean,
  country: boolean,
  gender: boolean,
  isAcceptedPrivacy: boolean
}


export const App: React.FC = () => {

  const defaultState = {
    email: '',
    password: '',
    fullName: '',
    country: '',
    gender: GenderEnum.MALE,
    isAcceptedPrivacy: false,
  }

  const defaultErrorState = {
    email: false,
    password: false,
    fullName: false,
    country: false,
    gender: false,
    isAcceptedPrivacy: false,
  }

  const [state, setState] = React.useState<StateType>(defaultState)
  const [errorState, setError] = React.useState<ErrorType>(defaultErrorState)

  const [ createUser, { data, error, loading } ] = useMutation(REGISTER)
  
  const handleRegister = () => {
    const {email, password, fullName, country} = state
    createUser({variables: {email, password, fullName, country}})
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
    setState({ ...state, gender: type })
  }

  const isDisabledButton = (): boolean => {
    const { email, password, fullName, country, gender, isAcceptedPrivacy } = state
    const isInvalid = Object.values(errorState).filter(_ => _).length
    if (loading || isInvalid || !email || !password || !fullName || !country || !gender || !isAcceptedPrivacy) {
      return true
    }
    return false
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
            value={state.fullName}
            blur={(evt: React.ChangeEvent<HTMLInputElement>) => checkField('fullName', testLatinLetters(evt.target.value))}
            change={(evt: React.ChangeEvent<HTMLInputElement>) => setState({...state, fullName: evt.target.value})}
            error={(error && error.message) || errorState.fullName && 'Please enter a valid name'}
            />
        </div>

        <div className='register__block'>
          <Input
            placeholder='Email'
            value={state.email}
            blur={(evt: React.ChangeEvent<HTMLInputElement>) => evt.target.value && checkField('email', !isValidEmail.validate(evt.target.value, { minDomainAtoms: 2 }))}
            icon={<EmailIcon />}
            change={(evt: React.ChangeEvent<HTMLInputElement>) => setState({ ...state, email: evt.target.value })}
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
            change={(evt: React.ChangeEvent<HTMLInputElement>) => setState({...state, password: evt.target.value})}
            error={errorState.password && 'Password must contain at least 6 symbols'}
          />
        </div>

        <div className='register__block'>
          <Select
            reset={() => {
              setState({ ...state, country: '' })
              checkField('country', true)
            }}
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
              click: () => setGender(GenderEnum.MALE)
            },{
              id: GenderEnum.FEMALE,
              label: 'Female',
              checked: state.gender === GenderEnum.FEMALE,
              click: () => setGender(GenderEnum.FEMALE)
            },]}
            error={errorState.gender && 'You must select the gender'}
          />
        </div>

        <div className='register__block'>
          <Checkbox
            checked={state.isAcceptedPrivacy}
            click={() => {
              if (state.isAcceptedPrivacy) {
                checkField('isAcceptedPrivacy', true)
              } else {
                checkField('isAcceptedPrivacy', false)
              }
              setState({ ...state, isAcceptedPrivacy: !state.isAcceptedPrivacy })
            }}
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
