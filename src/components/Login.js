import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import { emailAndPassValidation } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { BG_IMG } from '../utils/constants';

const Login = () => {

    const [signForm, setSignForm] = useState(true);
    const [error, setError] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const changeForm = () => {
        setSignForm(!signForm);

    }
    const submitData = () => {
        const errorVal = emailAndPassValidation(email.current.value, password.current.value);
        setError(errorVal);

        if (errorVal) return;

        if (!signForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://images.unsplash.com/photo-1544502062-f82887f03d1c?q=80&w=1859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }).then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...photoURL
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + "  " + errorMessage);
                    // ..
                });

        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }

    }
    return (
        <div className='relative'>
            <Header />
            <div className='w-3/12 bg-black opacity-80 px-14 pb-7 absolute mt-20 left-0 right-0 mx-auto'>
                <h1 className='text-white mt-10 text-2xl font-bold'>{signForm ? 'Sign In' : 'SignUp'}</h1>
                {error != null ? <p className='text-white ' >{error}</p> : ''}
                <form onSubmit={e => e.preventDefault()}>
                    {!signForm && <input type='text' ref={name} placeholder='Name' className='py-3 w-full mt-5 pl-5 rounded-md bg-gray-800 '></input>}
                    <input type='text' ref={email} placeholder='Email Address' className='py-3 w-full my-6 pl-5 rounded-md bg-gray-800 '></input>
                    <input type='text' ref={password} placeholder='Password' className='py-3 w-full mb-5 pl-5 rounded-md  bg-gray-800 ' ></input>
                    <button className='bg-red-600  my-6 px-6 py-3 text-white w-full rounded-md font-bold' onClick={submitData}>{signForm ? 'Sign In' : 'SignUp'} </button>
                </form>
                <div className='py-3 inline-block' ><div className=' text-gray-400 inline-block'> {!signForm ? 'Already have an account?' : 'New to Netflix?'}</div> <div onClick={changeForm} className='inline-block text-white cursor-pointer'>{!signForm ? 'Sign In Now' : 'SignUp Now'}</div></div>
            </div>
            <div >
                <img alt='background image' src={BG_IMG}></img>
            </div>

        </div>
    )
}

export default Login