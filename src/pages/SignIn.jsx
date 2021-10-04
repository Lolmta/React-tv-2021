import React from 'react'
import { auth } from '../Firebase/firebase'
import 'firebase/compat/auth'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'

const SignIn = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const  [err, seterr] = useState('')


    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).catch(err => {
            seterr(err.message)
        })
    }

    return (
        <div className='signin'>
            <div>
                <form className='signin__form'>
                    <h1>Sign In</h1>
                    <input ref={emailRef} type="email" placeholder='email' />
                    <input ref={passwordRef} type="password" placeholder = 'password'/>
                    <button  className='btn' onClick={signIn} >Sign In</button>
                    <h4>If you are not registered yet click 
                      <Link className='sign__link' to ='/signup'>Sign Up</Link> 
                    </h4>
                    {err &&  <Alert message='Check the correctness of the entered data' type = 'danger' />}
                </form>
            </div>
        </div>
    )
}

export default SignIn
