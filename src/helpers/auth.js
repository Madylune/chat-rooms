import { auth } from '../services/firebase'

export const signup = (email, password) => 
  auth().createUserWithEmailAndPassword(email, password)

export const signin = (email, password) =>
  auth().signInWithEmailAndPassword(email, password)

export const signout = () => 
  auth().signOut()

export const signinAsGuest = () =>
  auth().signInAnonymously()

export const updateUserData = user => {
  const currentUser = auth().currentUser
  currentUser.updateProfile(user).then(() => {
    // Update successful.
  }).catch(error => {
    console.log('Error updating user data:', error);
  })
}
