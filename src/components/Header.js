import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { auth } from '../services/firebase'
import { signout } from '../helpers/auth'
import get from 'lodash/fp/get'
import Login from '../pages/Login'

const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  background-color: #625672;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;

  button {
    margin-right: 5px;
  }
`

const StyledLogo = styled.img`
  height: 100%;
  cursor: pointer;
`

const Header = ({ history }) => {
  const [ user, setUser ] = useState()

  useEffect(() => {
    setUser(auth().currentUser)
  }, [])

  const logout = async() => await signout()

  const backToHome = () => history.push('/')

  return (
    <StyledHeader>
      <StyledLogo src={require("../assets/chatrooms_logo.png")} alt="Logo Chat Rooms" onClick={backToHome} />
      {user 
      ? (
        <>
          <div>
            Login in as: <strong>{get('displayName', user) ? get('displayName', user) : 'Anonyme'}</strong>
          </div>
          <button type="submit" onClick={logout}>Signout</button>
        </>
      )
      : <Login />
      }
    </StyledHeader>
  )
}

export default withRouter(Header)