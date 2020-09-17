import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signinAsGuest, updateUserData } from '../helpers/auth'
import Header from '../components/Header'
import styled from 'styled-components'
import get from 'lodash/fp/get'
import head from 'lodash/fp/head'
import { dispatch } from '../services/store'
import { updateCurrentUser } from '../actions/currentUser'
import { getPath } from '../helpers/routes'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SelectAvatar from '../components/SelectAvatar'
import { AVATARS } from '../helpers/fixtures'

const StyledHome = styled.div`
  text-align: center;
`

const StyledContent = styled.div`
  margin-top: 100px;
`

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledButton = styled(Button)`
  && {
    margin: 10px;
  }
`

const Home = ({ history }) => {
  const [ error, setError ] = useState(null)
  const [ avatar, setAvatar ] = useState(head(AVATARS))
  const [ username, setUsername ] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      const user = await signinAsGuest()
      const userData = {
        ...get('user', user),
        displayName: username,
        photoURL: avatar
      }
      
      await updateUserData(userData)
      dispatch(updateCurrentUser(userData))

      user && history.push(getPath('rooms'))
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
      <StyledForm onSubmit={handleSubmit}>
        <SelectAvatar setAvatar={setAvatar} avatar={avatar} />
        <TextField 
          label="Username" 
          variant="outlined" 
          name="username" 
          onChange={e => setUsername(e.target.value)}
          value={username} />
        {error ? <p>{error}</p> : null}
        <StyledButton variant="contained" color="primary" type="submit">
          Start chatting !
        </StyledButton>
      </StyledForm>
      </StyledContent>
    </StyledHome>
  )
}

export default withRouter(Home)