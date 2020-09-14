import React, { Component } from 'react'
import styled from 'styled-components'
import { auth, db } from '../services/firebase'
import { writeMessages } from '../helpers/db'
import get from 'lodash/fp/get'
import map from 'lodash/fp/map'
import Message from '../components/Message'
import Header from '../components/Header'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

const StyledChat = styled.div`
  background-color: #a0d3ff;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.h1`
  color: #1977af;
`

const StyledContent = styled.div`
  background-color: #ffffff;
  border: 3px solid #35aef5;
  border-radius: 20px;
  padding: 15px;
  width: 70%;
  height: 70%;
`

const StyledForm = styled.form`
  width: 70%;
  text-align: center;
  margin: 10px;

  input {
    width: 80%;
    height: 40px;
    border-radius: 20px;
    border: transparent;
    padding: 5px 20px;
    font-size: 16px;
  }
`

const StyledIconButton = styled(IconButton)`
  && {
    background-color: #1977af;
    color: #ffffff;
    margin: 10px;
  }
`

class Chat extends Component {
  state = {
    user: auth().currentUser,
    messages: [],
    content: '',
    readError: null,
    writeError: null
  }

  async componentDidMount() {
    this.setState({ readError: null })
    try {
      db.ref('/messages').on('value', snapshot => {
        this.setState({ messages: snapshot.val() })
      })
    } catch (err) {
      this.setState({ readError: err.message })
    }
  }

  handleChange = e => this.setState({ content: e.target.value })

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ writeError: null })
    try {
      const message = {
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid
      }
      await writeMessages(message)
      this.setState({ content: '' })
    } catch (err) {
      this.setState({ writeError: err.message })
    }
  }

  render() {
    const { messages, content, error, writeError } = this.state
    return (
      <StyledChat>      
        <Header />
        <StyledTitle>General Room</StyledTitle>
        <StyledContent>
          {map(message => 
            <Message key={get('timestamp', message)} message={message} />
          , messages)}
        </StyledContent>
        <StyledForm onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={content}></input>
          {error ? <p>{writeError}</p> : null}
          <StyledIconButton aria-label="send" type="submit">
            <SendIcon />
          </StyledIconButton>
        </StyledForm>
      </StyledChat>
    )
  }
}

export default Chat