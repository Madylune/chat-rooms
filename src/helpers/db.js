import { db } from '../services/firebase'

export const writeMessages = message => 
  db.ref('/messages').push({
    content: message.content,
    timestamp: message.timestamp,
    uid: message.uid
  })

export const createUser = user =>
  db.ref('/users').push({
    username: user.username,
    uid: user.uid
  })