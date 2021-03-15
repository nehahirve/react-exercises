import React, { useState } from 'react'
import VerticalSpace from './VerticalSpace'

export default function Form(props) {
  const [userName, setUserName] = useState('')
  const [age, setAge] = useState('')

  const save = e => {
    e.preventDefault()
    props.save({ userName, age })
  }

  return (
    <>
      <h1>Fill in with some data</h1>
      <form onSubmit={save}>
        <div className='form-item'>
          <label htmlFor='name'>Name</label>
          <VerticalSpace height={5} />
          <input
            id='name'
            type='text'
            placeholder='Type in your name'
            onChange={e => setUserName(e.target.value)}
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
