import React from 'react'
import styled from 'styled-components'
import get from 'lodash/fp/get'

const StyledMessage = styled.div`
  background-color: #cbe3fb;
  border-radius: 40px;
  margin: 10px;
  padding: 10px 20px;
  width: fit-content;
`

const Message = ({ message }) => (
  <StyledMessage>
    {get('content', message)}
  </StyledMessage>
)

export default Message