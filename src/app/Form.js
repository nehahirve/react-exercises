import React, { useState, useContext } from 'react'
import { UserContext } from './UserContext'
import VerticalSpace from './VerticalSpace'

export default function Form(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const { setUser } = useContext(UserContext)

  const save = e => {
    e.preventDefault()
    setUser({ firstName, lastName, age })
  }

  return (
    <>
      <h1>Fill in with some data</h1>
      <form onSubmit={save}>
        <div className='form-item'>
          <label htmlFor='firstName'>First Name</label>
          <VerticalSpace height={5} />
          <input
            id='name'
            type='text'
            placeholder='Type in your name'
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <VerticalSpace height={5} />

        <div className='form-item'>
          <label htmlFor='lastName'>Last Name</label>
          <VerticalSpace height={5} />
          <input
            id='name'
            type='text'
            placeholder='Type in your name'
            onChange={e => setLastName(e.target.value)}
          />
        </div>

        <VerticalSpace height={5} />

        <div className='form-item'>
          <label htmlFor='age'>Age</label>
          <VerticalSpace height={5} />
          <input
            id='age'
            type='number'
            placeholder='Type in your age'
            onChange={e => setAge(e.target.value)}
          />
        </div>

        <VerticalSpace height={10} />

        <input type='submit' value='Save!' />
      </form>
    </>
  )
}
