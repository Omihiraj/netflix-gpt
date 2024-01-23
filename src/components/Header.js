
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

import { useState } from 'react';

import { FaBeer, FaFontAwesome } from "react-icons/fa";
import { LOGO } from '../utils/constants';



const Header = () => {

    const navigate = useNavigate();
    const dispath = useDispatch();
    const appUser = useSelector((store) => store.user);

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email, photoURL } = user;
                console.log(user);
                dispath(addUser({ uid: uid, displayName: displayName, email: email, photoURL: photoURL }))
                navigate('/browse');
            } else {
                console.log("Not Log");
                dispath(removeUser(null));
                navigate('/')
            }
        });

        return () => unsubscribe();

    }, []);

    const logout = () => {
        signOut(auth).then(() => {
            console.log("Log Out in the App");
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <div className='absolute w-full bg-gradient-to-b from-black flex justify-between '>
            <img src={LOGO} alt='header logo' className='w-60 h-24 z-50'></img>

            {appUser !== null ? <div className='mr-10 mt-6 cursor-pointer ' onMouseEnter={() => setOpenModal(true)} onMouseLeave={() => setOpenModal(false)}>
                <div className='z-50'>
                    <img src={appUser.photoURL} className='w-10 h-10 inline-block rounded-full' />
                    <p className='inline-block text-2xl font-bold text-white'>{appUser.displayName}</p>

                    <FaFontAwesome icon="fa-solid fa-arrow-right" className='hover:rotate-180 transition-all duration-300 transform-origin-top-left' />


                </div>
                <div className='z-50 absolute right-14 '>
                    <ul className={!openModal ? 'hidden' : ''}>
                        <li className='bg-black text-white py-1 px-3 mt-0.5 text-base opacity-85'>Update Profile</li>
                        <li className='bg-black text-white py-1 px-3 mt-0.5 text-base opacity-75' onClick={logout}>Logout</li>
                    </ul>
                </div>

            </div> : <div></div>}






        </div>
    )
}

export default Header