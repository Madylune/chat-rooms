import { db } from '../services/firebase'
import get from 'lodash/fp/get'
import { generateRoomCode } from './utils'

export const addFirebaseNode = async ({ path, entity }) => {
  const ref = db.ref(path)
  const id = get('id', entity) ? entity.id : await ref.push().key
  const node = {
    id,
    ...entity
  }
  await ref.child(id).set(node)
  return node
}

export const updateFirebaseNode = async ({ path, entity, query = q => q }) => {
  const ref = db.ref(path)
  const id = get('id', entity) ? entity.id : await ref.push().key
  await query(ref).update({
    ...entity,
    id
  })
  return entity
}

export const listenFirebaseNode = async ({ path, onData, query = q => q }) => {
  const ref = query(db.ref(path))
  ref.off()
  ref.on('value', snapshot => {
    const val = snapshot.val()
    onData && onData(val)
  })
  return path
}

export const fetchFirebaseNode = async ({ path, query = q => q }) => {
  const snapshot = await query(db.ref(path)).once('value')
  return snapshot.val()
}

export const writeMessages = async message => {
  const entity = {
    content: message.content,
    timestamp: message.timestamp,
    userId: message.uid
  }
  await addFirebaseNode({
    path: '/messages',
    entity
  })
}

export const createUser = async user => {
  const entity = {
    displayName: user.displayName,
    email: user.email,
    id: user.uid,
    photoURL: user.photoURL
  }
  await addFirebaseNode({
    path: '/users',
    entity
  })
}

export const fetchUserById = async userId => {
  const user = await fetchFirebaseNode({
    path: `users/${userId}`
  })
  return user
}

export const createRoom = async data => {
  const entity = {
    title: data.title,
    createdAt: data.timestamp,
    createBy: data.userId,
    access: data.access,
    code: generateRoomCode()
  }
  const room = await addFirebaseNode({
    path: '/rooms',
    entity
  })
  return room
}