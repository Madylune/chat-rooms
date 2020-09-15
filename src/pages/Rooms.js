import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import { db } from '../services/firebase'

const StyledWrapper = styled.div`
  background-color: #e4dcea;
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

class Rooms extends Component {
  state = {
    error: null,
    title: '',
    access: '',
    rooms: []
  }

  async componentDidMount() {
    try {
      db.ref('/rooms').orderByChild('access').equalTo('public').on('value', snapshot => {
        this.setState({ rooms: snapshot.val() })
      })
    } catch (err) {
      console.log("Fail to fetch rooms", err)
    }
  }

  handleSubmit = async e => {
    const { history, currentUser } = this.props
    const { title, access } = this.state
    e.preventDefault()
    this.setState({ error: '' })
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
      this.setState({ error: err.message })
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { error, title, access, rooms } = this.state
    return (
      <StyledWrapper>      
        <Header />
        <StyledContent>
          <h2>Create your room !</h2>
          <form onSubmit={this.handleSubmit}>
            <TextField 
              id="outlined-basic" 
              label="Room's title" 
              variant="outlined" 
              name="title" 
              onChange={this.handleChange}
              value={title} />
            <RadioGroup aria-label="access" name="access" value={access} onChange={this.handleChange}>
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
              <Link to={getPath('room', { code: get('code', room) })} key={room.id}>{get('title', room) ? get('title', room) : 'Chat Room'} - {get('access', room)}</Link>
            ), ROOMS)}
            {map(room => (
              <Link to={getPath('room', { code: get('code', room) })} key={room.id}>{get('title', room) ? get('title', room) : 'Chat Room'} - {get('access', room)}</Link>
            ), rooms)}
          </StyledRooms>
        </StyledContent>
      </StyledWrapper>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default withRouter(connect(mapStateToProps)(Rooms))