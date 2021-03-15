import React, { useState } from 'react'

export const UserContext = React.createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: '...',
    lastName: '...',
    age: '...'
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
