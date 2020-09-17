import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import get from 'lodash/fp/get'
import { useSelector } from 'react-redux'
import AvatarBadge from './AvatarBadge'
import { fetchUserById } from '../helpers/db'

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 15px 0;
`

const StyledUser = styled.div`
  display: flex;
  align-items: center;
`

const StyledUsername = styled.div`
  font-weight: bold;
  margin: 0 5px;
`

const StyledMessage = styled.div`
  background-color: ${props => props.isCurrentUser ? '#f9d3b2' : '#cbe3fb'};
  border-radius: 40px;
  padding: 10px 20px;
  width: fit-content;
`

const Message = ({ message }) => {
  const [ user, setUser ] = useState()
  const currentUser = useSelector(state => state.currentUser)
  const isCurrentUser = get('uid', currentUser) === get('userId', message)

  useEffect(() => {
    async function fetchUser() {
      const user = await fetchUserById(get('userId', message))
      setUser(user)
    }
    fetchUser()
  }, [message])

  return (
    <StyledWrapper>
      <StyledUser>
        <AvatarBadge userAvatar={get('photoURL', user)} />
        <StyledUsername>{get('displayName', user) ? get('displayName', user) : 'Anonyme'}:</StyledUsername>
      </StyledUser>
      <StyledMessage isCurrentUser={isCurrentUser}>
        {get('content', message)}
      </StyledMessage>
    </StyledWrapper>
  )
}

export default Message