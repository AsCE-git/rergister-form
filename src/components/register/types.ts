export enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export type StateType = {
  email: string,
  password: string,
  name: string,
  country: string,
  gender: GenderEnum,
  isAcceptedPrivacy: boolean
}

export type ErrorType = {
  email: boolean,
  password: boolean,
  name: boolean,
  country: boolean,
  gender: boolean,
  isAcceptedPrivacy: boolean
}
