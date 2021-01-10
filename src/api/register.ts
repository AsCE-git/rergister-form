import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation signup($name: String!, $email: String!, $password: String!, $country: String!, $gender: Gender!) {
    signup(input: {
      name: $name,
      email: $email,
      password: $password,
      country: $country,
      gender: $gender
    }) { id name email country gender }
  }
`
