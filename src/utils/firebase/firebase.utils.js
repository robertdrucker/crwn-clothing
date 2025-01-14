// Gives us access to Firestore Database
// 'app' is a suite of tools
// 'initializeApp' creates an an app instance off of firebaseConfig'.
import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB62MSZ1SToQdZsr3xXAgPkX-ZM8ku44eE',
  authDomain: 'crwn-clothing-db-5b187.firebaseapp.com',
  projectId: 'crwn-clothing-db-5b187',
  storageBucket: 'crwn-clothing-db-5b187.firebasestorage.app',
  messagingSenderId: '698484069022',
  appId: '1:698484069022:web:518a43803db9cfdc39618f',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  console.log(userAuth)
}

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
