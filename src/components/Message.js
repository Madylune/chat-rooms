import React from 'react'
import styled from 'styled-components'
import get from 'lodash/fp/get'
import { useSelector } from 'react-redux'
import AvatarBadge from './AvatarBadge'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledUsername = styled.div``

const StyledMessage = styled.div`
  background-color: ${props => props.isCurrentUser ? '#f9d3b2' : '#cbe3fb'};
  border-radius: 40px;
  margin: 10px;
  padding: 10px 20px;
  width: fit-content;
`

const Message = ({ message }) => {
  const currentUser = useSelector(state => state.currentUser)
  const isCurrentUser = get('uid', currentUser) === get('userId', message)

  return (
    <StyledWrapper>
      <AvatarBadge />
      <StyledUsername>{get('userId', message) ? get('userId', message) : 'Anonyme'}</StyledUsername>
      <StyledMessage isCurrentUser={isCurrentUser}>
        {get('content', message)}
      </StyledMessage>
    </StyledWrapper>
  )
}

export default Message