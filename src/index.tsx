import './styles/index.sass'
import React from 'react'
import { App } from '@/app'
import { render } from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://homework.nextbil.com/graphql',
  cache: new InMemoryCache()
})

const parentElement = document.createElement('div')
parentElement.classList.add('wrapper')
document.body.appendChild(parentElement)

const application = <ApolloProvider client={client}>
    <App />
  </ApolloProvider>

render(application, parentElement)
