import React, { useState } from 'react'
import styled from 'styled-components'
import { signup, updateUserData } from '../helpers/auth'
import get from 'lodash/fp/get'
import head from 'lodash/fp/head'
import { dispatch } from '../services/store'
import { updateCurrentUser } from '../actions/currentUser'
import Header from '../components/Header'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SelectAvatar from '../components/SelectAvatar'
import { AVATARS } from '../helpers/fixtures'

const StyledForm = styled.form`
  margin: 100px;
`

const StyledInput = styled.div`
  margin: 10px 0;
`

const Signup = () => {
  const [ error, setError ] = useState(null)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ avatar, setAvatar ] = useState(head(AVATARS))

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      const user = await signup(email, password)
      const userData = {
        ...get('user', user),
        displayName: username,
        photoURL: avatar
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
    <Header />
    <StyledForm onSubmit={handleSubmit}>
      <h1>
        Sign Up
      </h1>
      <p>Fill in the form below to create an account.</p>
      <StyledInput>
        <TextField 
          label="Email" 
          variant="outlined" 
          name="email" 
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email} />
      </StyledInput>
      <StyledInput>
        <TextField 
          label="Password" 
          variant="outlined" 
          name="password" 
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password} />
      </StyledInput>
      <SelectAvatar setAvatar={setAvatar} avatar={avatar} />
      <StyledInput>
        <TextField 
          label="Username" 
          variant="outlined" 
          name="username" 
          onChange={e => setUsername(e.target.value)}
          value={username} />
      </StyledInput>
      <div>
        {error ? <p>{error}</p> : null}
        <Button variant="contained" color="primary" type="submit" disabled={disabled}>
          Sign up
        </Button>
      </div>
    </StyledForm>
  </div>
  )
}

export default Signup