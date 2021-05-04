import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
//import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'
import CreateAccount from './pages/createAccount';
import Login from './pages/login';
import { App } from './App';
import Chatroom from './pages/chatroom';
import Profile from './pages/profile';


test('full app rendering', () => {
  const history = createMemoryHistory()
  const route = '/Login'
  history.push(route)
  render(
    <Router history={history}>
      <Login/>
    </Router>
  )
  expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
 
  })

  test('Testing create account page', () => {
    const history = createMemoryHistory()
    history.push('/CreateAccount')
    render(
      <Router history={history}>
        <CreateAccount />
      </Router>
    )
    expect(screen.getByText(/Hello, Please Sign Up!/i)).toBeInTheDocument();
  })

   test('Testing Chatroom Page', () => {
    const history = createMemoryHistory()
    history.push('/Chatroom')
    render(
      <Router history={history}>
        <Chatroom/>
      </Router>
    )
    expect(screen.getByText(/SEND/i)).toBeInTheDocument();
  }) 

  test('Testing Profile Page', () => {
    const history = createMemoryHistory()
    history.push('/Profile')
    render(
      <Router history={history}>
        <Profile/>
      </Router>
    )
    expect(screen.getByText(/Friend/i)).toBeInTheDocument();
  })
