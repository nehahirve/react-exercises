import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export default function Header() {
  const { user } = useContext(UserContext)
  return (
    <header>
      Welcome, {user.firstName} {user.lastName}!
    </header>
  )
}
