/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { initializeApp } from 'firebase/app'
import { useDeviceLanguage, getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY!,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN!,
//   projectId: 'plinko-balls',
//   storageBucket: 'plinko-balls.appspot.com',
//   messagingSenderId: '203383280650',
//   appId: import.meta.env.VITE_FIREBASE_APP_ID!,
//   measurementId: 'G-4W19TNHHXZ'
// }

const firebaseConfig = {
  apiKey: "AIzaSyBv2dtTUYHuwI6bbDbVbnU27_Zw2ihV_uI",
  authDomain: "bright-practice-331514.firebaseapp.com",
  projectId: "bright-practice-331514",
  storageBucket: "bright-practice-331514.appspot.com",
  messagingSenderId: "1066767678808",
  appId: "1:1066767678808:web:0eb9a800f5bdac5edc792d",
  measurementId: "G-L539R7ELBV"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const database = getDatabase(app)

useDeviceLanguage(auth)
