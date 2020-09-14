import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signinAsGuest, updateUserData } from '../helpers/auth'
import Header from '../components/Header'
import styled from 'styled-components'
import get from 'lodash/fp/get'
import { dispatch } from '../services/store'
import { updateCurrentUser } from '../actions/currentUser'

const StyledHome = styled.div`
  text-align: center;
`

const StyledContent = styled.div`
  margin-top: 100px;
`

const Home = ({ history }) => {
  const [ error, setError ] = useState(null)
  const [ username, setUsername ] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      const user = await signinAsGuest()
      const userData = {
        ...get('user', user),
        displayName: username
      }
      
      await updateUserData(userData)
      dispatch(updateCurrentUser(userData))

      user && history.push('/chat')
    } catch (err) {
      console.log('err', err.message)
      setError(err.message)
    }
  }
  
  return (
    <StyledHome>
      <Header />
      <StyledContent>
      <h2>Join a room and chat with other people or create yours to invite your friends !</h2>

      <p>Create your account: <Link to="/signup">Sign Up</Link></p>

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
      </StyledContent>
    </StyledHome>
  )
}

export default withRouter(Home)