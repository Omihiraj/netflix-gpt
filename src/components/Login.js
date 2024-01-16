import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

    const [signForm, setSignForm] = useState(true)
    const changeForm = () => {
        setSignForm(!signForm);

    }
    return (
        <div className='relative'>
            <Header />
            <div className='w-3/12 bg-black opacity-80 px-14 pb-7 absolute mt-20 left-0 right-0 mx-auto'>
                <h1 className='text-white mt-10 text-2xl font-bold'>{signForm ? 'Sign In' : 'SignUp'}</h1>
                <form>
                    {!signForm && <input type='text' placeholder='Name' className='py-3 w-full mt-5 pl-5 rounded-md bg-gray-800 '></input>}
                    <input type='text' placeholder='Email Address' className='py-3 w-full my-6 pl-5 rounded-md bg-gray-800 '></input>
                    <input type='text' placeholder='Password' className='py-3 w-full mb-5 pl-5 rounded-md  bg-gray-800 ' ></input>
                    <button className='bg-red-600  my-6 px-6 py-3 text-white w-full rounded-md font-bold'>{signForm ? 'Sign In' : 'SignUp'} </button>
                </form>
                <div className='py-3 inline-block' ><div className=' text-gray-400 inline-block'> {!signForm ? 'Already have an account?' : 'New to Netflix?'}</div> <div onClick={changeForm} className='inline-block text-white cursor-pointer'>{!signForm ? 'Sign In Now' : 'SignUp Now'}</div></div>
            </div>
            <div >
                <img alt='background image' src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/6a081e9d-5ced-4322-99e9-ec613931c0ac/LK-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
            </div>

        </div>
    )
}

export default Login