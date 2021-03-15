import React, { useContext } from 'react'
import VerticalSpace from './VerticalSpace'
import { UserContext } from './UserContext'

export default function Profile(props) {
  const value = useContext(UserContext)

  return (
    <div className='profile'>
      <div className='profile-picture'>
        <img src='empty-user-profile.png' alt='User profile' />
      </div>

      <VerticalSpace height={15} />

      <div className='profile-data'>
        <div className='profile-data-item'>
          <h3>First Name:</h3>
          <p>{value.user.firstName}</p>
        </div>

        <div className='profile-data-item'>
          <h3>Last Name:</h3>
          <p>{value.user.lastName}</p>
        </div>

        <VerticalSpace height={15} />

        <div className='profile-data-item'>
          <h3>Age:</h3>
          <p>{value.user.age}</p>
        </div>
      </div>
    </div>
  )
}
