import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signinAsGuest } from '../helpers/auth'

const Home = ({ history }) => {
  const [ error, setError ] = useState(null)
  const [ username, setUsername ] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      const user = await signinAsGuest()
      user && history.push('/chat')
    } catch (err) {
      console.log('err', err.message)
      setError(err.message)
    }
  }
  
  return (
    <div>
      <h1>Chat Rooms</h1>
      <p>Join a room and chat with other people or create yours to invite your friends !</p>

      <p>Create your account: <Link to="/signup">Sign Up</Link></p>
      <p>Already have an account ? <Link to="/login">Login</Link></p>

      <p>Or chat as guest: </p>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input 
          placeholder="Username" 
          name="username" 
          type="username" 
          onChange={e => setUsername(e.target.value)}
          value={username}>
        </input>
        {error ? <p>{error}</p> : null}
        <button type="submit">Start chatting !</button>
      </form>
    </div>
  )
}

export default withRouter(Home)