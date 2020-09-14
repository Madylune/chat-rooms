import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup, updateUserData } from '../helpers/auth'
import get from 'lodash/fp/get'
import { dispatch } from '../services/store'
import { updateCurrentUser } from '../actions/currentUser'

const Signup = () => {
  const [ error, setError ] = useState(null)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ username, setUsername ] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      const user = await signup(email, password)
      const userData = {
        ...get('user', user),
        displayName: username
      }
      await updateUserData(userData)
      dispatch(updateCurrentUser(userData))
    } catch (err) {
      setError(err.message)
    }
  }

  const disabled = !email || !password || !username

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <h1>
        Sign Up
      </h1>
      <p>Fill in the form below to create an account.</p>
      <div>
        <input 
          placeholder="Email" 
          name="email" 
          type="email" 
          onChange={e => setEmail(e.target.value)}
          value={email}>
        </input>
      </div>
      <div>
        <input 
          placeholder="Password" 
          name="password" 
          type="password" 
          onChange={e => setPassword(e.target.value)}
          value={password}>
        </input>
      </div>
      <div>
        <label>Username: </label>
        <input 
          placeholder="Username" 
          name="username" 
          type="username" 
          onChange={e => setUsername(e.target.value)}
          value={username}>
        </input>
      </div>
      <div>
        {error ? <p>{error}</p> : null}
        <button type="submit" disabled={disabled}>Sign up</button>
      </div>
      <hr></hr>
      <p>Already have an account ? <Link to="/login">Login</Link></p>
    </form>
  </div>
  )
}

export default Signup