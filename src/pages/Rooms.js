import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import map from 'lodash/fp/map'
import get from 'lodash/fp/get'
import { ROOMS } from '../helpers/fixtures'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import { createRoom } from '../helpers/db'
import { getPath } from '../helpers/routes'

const StyledWrapper = styled.div`
  background-color: #a0d3ff;
  height: 100vh;
  margin: 0;
  overflow: hidden;
`

const StyledContent = styled.div`
  padding: 50px;
`

const StyledRooms = styled.div`
  display: flex;
  flex-direction: column;
`

const Rooms = ({ history }) => {
  const [ error, setError ] = useState(null)
  const [ title, setTitle ] = useState('')
  const [ access, setAccess ] = useState('')
  const currentUser = useSelector(state => state.currentUser)

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      const roomEntity = {
        title,
        timestamp: Date.now(),
        userId: currentUser.uid,
        access
      }
      const room = await createRoom(roomEntity)
      room && history.push(getPath('room', { code: get('code', room) }))
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <StyledWrapper>      
      <Header />
      <StyledContent>
        <h2>Create your room !</h2>
        <form onSubmit={handleSubmit}>
          <TextField 
            id="outlined-basic" 
            label="Room's title" 
            variant="outlined" 
            name="title" 
            onChange={e => setTitle(e.target.value)}
            value={title} />
          <RadioGroup aria-label="access" name="access" value={access} onChange={e => setAccess(e.target.value)}>
            <FormControlLabel value="public" control={<Radio />} label="Public" />
            <FormControlLabel value="private" control={<Radio />} label="Private" />
          </RadioGroup>
          <div>
            {error ? <p>{error}</p> : null}
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
          </div>
        </form>
        <hr></hr>
        <h2>Or join an existing room:</h2>
        <StyledRooms>
          {map(room => (
            <Link to="/chat" key={room.id}>{get('title', room) ? get('title', room) : 'Chat Room'} - {get('access', room)}</Link>
          ), ROOMS)}
        </StyledRooms>
      </StyledContent>
    </StyledWrapper>
  )
}

export default withRouter(Rooms)