import React from 'react'
import { auth } from '../Firebase/firebase'
import 'firebase/compat/auth'
import { useRef, useState } from 'react'
import db from '../Firebase/firebase';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';

const SignUp = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const  [err, seterr] = useState('')
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
        }).catch(err => {
            console.log(err)
            seterr(err.message)
        })
    }

    return (
        <div>
            <div className='signin'>
            <div>
                <form className='signin__form'>
                <h1>Sign Up</h1>
                    <input ref={emailRef} type="email" placeholder='email' />
                    <input ref={passwordRef} type="password" placeholder = 'password'/>
                    <button className='btn' onClick={signUp}>Sign Up</button>
                    <h4>If you already have an account click 
                    <Link to ='/' className='sign__link'>Sign In</Link> </h4> 
                    {err &&  <Alert message='Check the correctness of the entered data' type = 'danger'/>}
                </form>
            </div>
        </div>
        </div>
    )
}

export default SignUp
