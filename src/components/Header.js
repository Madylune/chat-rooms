import React, { useState, useEffect } from 'react'
import { auth } from '../services/firebase'
import { signout } from '../helpers/auth'
import get from 'lodash/fp/get'

const Header = () => {
  const [ user, setUser ] = useState()

  useEffect(() => {
    setUser(auth().currentUser)
  }, [])

  const logout = async() => await signout()

  return (
    <div>
      <img src={require("../assets/chatrooms_logo.png")} height="100px" alt="Logo Chat Rooms" />
      <div>
        Login in as: <strong>{get('displayName', user) ? get('displayName', user) : 'Anonyme'}</strong>
      </div>
      <button type="submit" onClick={logout}>Signout</button>
    </div>
  )
}

export default Header