import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../helpers/auth'

const Signup = () => {
  const [ error, setError ] = useState(null)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await signup(email, password)
    } catch (err) {
      setError(err.message)
    }
  }

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
        {error ? <p>{error}</p> : null}
        <button type="submit">Sign up</button>
      </div>
      <hr></hr>
      <p>Already have an account ? <Link to="/login">Login</Link></p>
    </form>
  </div>
  )
}

export default Signup