import './styles/index.sass'
import React from 'react'
import { App } from '@/app'
import { render } from 'react-dom'
import { ThemeProvider } from './styles/styled';
import { defaultTheme } from './styles/themes'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://homework.nextbil.com/graphql',
  cache: new InMemoryCache()
})

const parentElement = document.createElement('div')
parentElement.classList.add('wrapper')
document.body.appendChild(parentElement)

const application = <ApolloProvider client={client}>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>

render(application, parentElement)
