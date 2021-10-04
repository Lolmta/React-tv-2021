import React from 'react'
import { auth, firebase } from '../Firebase/firebase'
import 'firebase/compat/auth'
import { useRef } from 'react'
import db from '../Firebase/firebase';

const SignIn = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signUp = (e) => {
        e.preventDefault();
    
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((res) => {
            return db.collection('users').doc(res.user.uid).set({
                email: res.user.email,
                favorites: []
            })
        }).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='signin'>
            <div>
                <form className='signin__form'>
                    <h1>Sign In</h1>
                    <input ref={emailRef} type="email" />
                    <input ref={passwordRef} type="password" />
                    <button  className='btn' onClick={signIn} >Sign In</button>
                    <h6>If you are not registered yet, just enter your name, password and click Sign Up</h6>
                    <button className='btn' onClick={signUp}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
