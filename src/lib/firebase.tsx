// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { IUser } from "./Authentication/Interface";

const firebaseConfig = {
  apiKey: "AIzaSyAZh2ds2YM4JdV4y77WDseQtRQh_ayEaQo",
  authDomain: "aula-nextjs-firebase.firebaseapp.com",
  projectId: "aula-nextjs-firebase",
  storageBucket: "aula-nextjs-firebase.appspot.com",
  messagingSenderId: "1054569768862",
  appId: "1:1054569768862:web:2a15d8661bd0636db0188f"
};

 
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID
// };
 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  const formatUser = (user:any ) :IUser  => ({
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.accessToken,
    provider: user.providerId,
    photoUrl: user.photoURL,
  }) 

 export const firebase = { app, auth, formatUser }  