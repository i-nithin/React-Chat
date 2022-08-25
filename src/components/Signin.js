import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase'



const style ={
    wrapper : `flex justify-center`
}

const googleSignin = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}

const Signin = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton  onClick={googleSignin }/>
    </div>
  )
}

export default Signin