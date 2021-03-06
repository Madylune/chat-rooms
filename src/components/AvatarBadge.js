import React from 'react'
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'

const StyledBadge = styled(Badge)`
  && {
    .MuiBadge-dot {
      background-color: #44b700;
    }
  }
`

const AvatarBadge = ({ userAvatar }) => {
  return (
    <div>
      <StyledBadge 
        variant="dot" 
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Avatar alt="User's avatar" src={require(`../assets/avatars/${userAvatar ? userAvatar : 'avatar-1'}.jpg`)} />
      </StyledBadge>
    </div>
  )
}

export default AvatarBadge