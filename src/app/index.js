import React, { useState } from 'react'
import { UserContextProvider } from './UserContext'
import './App.css'
import Card from './Card'
import Cards from './Cards'
import Form from './Form'
import Header from './Header'
import Profile from './Profile'

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Cards>
        <Card>
          <Form />
        </Card>

        <Card>
          <Profile />
        </Card>
      </Cards>
    </UserContextProvider>
  )
}

export default App
