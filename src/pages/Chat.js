import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { auth, db } from '../services/firebase'
import { writeMessages, fetchRoomByCode } from '../helpers/db'
import get from 'lodash/fp/get'
import map from 'lodash/fp/map'
import Message from '../components/Message'
import Header from '../components/Header'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import { BREAKPOINTS } from '../helpers/theme'

const StyledChat = styled.div`
  background-color: #a0d3ff;
  height: 100vh;
  margin: 0;
  overflow: hidden;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: ${BREAKPOINTS.sm}) {
    padding-top: 20px;
  }
`

const StyledTitle = styled.h1`
  color: #1977af;
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 20px;
  }
`

const StyledMessages = styled.div`
  background-color: #ffffff;
  border: 3px solid #35aef5;
  border-radius: 20px;
  padding: 15px;
  width: 70%;
  height: 70%;
  overflow: scroll;

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 90%;
    padding: 7px;
    font-size: 12px;
  }
`

const StyledForm = styled.form`
  width: 70%;
  text-align: center;
  margin: 10px;
  display:flex;
  align-items: center;

  input {
    height: 40px;
    border-radius: 20px;
    border: transparent;
    padding: 5px 20px;
    font-size: 16px;
    flex-grow: 1;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 90%;
    margin: 0;
    input {
      height: 25px;
    }
  }
`

const StyledIconButton = styled(IconButton)`
  && {
    background-color: #1977af;
    color: #ffffff;
    margin: 10px;

    @media (max-width: ${BREAKPOINTS.sm}) {
      margin: 5px;
      padding: 9px;
    }
  }
`

class Chat extends Component {
  state = {
    user: auth().currentUser,
    room: undefined,
    messages: [],
    content: '',
    readError: null,
    writeError: null
  }

  async componentDidMount() {
    const { code } = this.props
    this.setState({ readError: null })
    try {
      db.ref('/messages').orderByChild('room').equalTo(code).on('value', snapshot => {
        this.setState({ messages: snapshot.val() })
      })
      const room = await fetchRoomByCode(code)
      this.setState({ room })
    } catch (err) {
      this.setState({ readError: err.message })
    }
  }

  handleChange = e => this.setState({ content: e.target.value })

  handleSubmit = async e => {
    const { room, user, content } = this.state
    e.preventDefault()
    this.setState({ writeError: null })
    try {
      const message = {
        content: content,
        timestamp: Date.now(),
        uid: user.uid,
        room: room.code
      }
      await writeMessages(message)
      this.setState({ content: '' })
    } catch (err) {
      this.setState({ writeError: err.message })
    }
  }

  render() {
    const { messages, content, error, writeError, room } = this.state
    return (
      <StyledChat>      
        <Header />
        <StyledContent>
          <StyledTitle>{get('title', room)}</StyledTitle>
          <StyledMessages>
            {map(message => 
              <Message key={get('timestamp', message)} message={message} />
            , messages)}
          </StyledMessages>
          <StyledForm onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={content}></input>
            {error ? <p>{writeError}</p> : null}
            <StyledIconButton aria-label="send" type="submit">
              <SendIcon />
            </StyledIconButton>
          </StyledForm>
        </StyledContent>
      </StyledChat>
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const code = get('params.code', match)
  return {
    code
  }
}

export default connect(mapStateToProps)(Chat)