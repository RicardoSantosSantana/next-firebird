import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import firebaseConfig from './firebase.config'
import { IUser } from './Authentication/Interface'

const app = initializeApp(firebaseConfig)
const auth = getAuth()

const formatUser = (user:any): IUser => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.accessToken,
  provider: user.providerId,
  photoUrl: user.photoURL
})

export const firebase = { app, auth, formatUser }
