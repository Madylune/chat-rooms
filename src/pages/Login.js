import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { signin } from '../helpers/auth'
import { getPath } from '../helpers/routes'
import Button from '@material-ui/core/Button'

const StyledLogin = styled.div`
  input {
    margin: 0 3px;
  }
  button {
    margin-right: 5px;
  }
`

const StyledButton = styled(Button)`
  && {
    color: #ffffff;
    border-color: #ffffff;
  }
`

const Login = ({ history }) => {
  const [ error, setError ] = useState(null)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      const user = await signin(email, password)
      user && history.push(getPath('rooms'))
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <StyledLogin>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Email" 
          name="email" 
          type="email" 
          onChange={e => setEmail(e.target.value)}
          value={email}>
        </input>
        <input 
          placeholder="Password" 
          name="password" 
          type="password" 
          onChange={e => setPassword(e.target.value)}
          value={password}>
        </input>
        {error ? <p>{error}</p> : null}
        <StyledButton size="small" variant="outlined" type="submit">
          Login
        </StyledButton>
      </form>
    </StyledLogin>
  )
}

export default withRouter(Login)