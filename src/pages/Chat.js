import React, { Component } from 'react'
import { auth, db } from '../services/firebase'
import { writeMessages } from '../helpers/db'
import { signout } from '../helpers/auth'
import map from 'lodash/fp/map'
import get from 'lodash/fp/get'

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

  logout = async() => await signout()

  render() {
    const { messages, user, content, error, writeError } = this.state
    return (
      <div>
        <div>
          {map(message => (
            <div key={get('timestamp', message)}>{get('content', message)}</div>
          ), messages)}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={content}></input>
          {error ? <p>{writeError}</p> : null}
          <button type="submit">Send</button>
        </form>
        <div>
          Login in as: <strong>{user.email}</strong>
        </div>
        <button type="submit" onClick={this.logout}>Signout</button>
      </div>
    )
  }
}

export default Chat