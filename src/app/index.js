import React, { useState } from 'react'
import './App.css'
import Card from './Card'
import Cards from './Cards'
import Form from './Form'
import Header from './Header'
import Profile from './Profile'

function App() {
  const [user, setUser] = useState({ userName: '...', age: '...' })

  const save = ({ userName, age }) => {
    setUser({ userName, age })
  }

  return (
    <>
      <Header />
      <Cards>
        <Card>
          <Form save={save} />
        </Card>

        <Card>
          <Profile user={user} />
        </Card>
      </Cards>
    </>
  )
}

export default App
