import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store=> store.user);
    const handleSignOut = () =>{
        signOut(auth).then(() => {
          // Sign-out successful.
          navigate("/")
        }).catch((error) => {
          // An error happened.
          navigate("/error")
        });
    }
    return (
        <div className='flex justify-between z-10 w-full absolute p-8 bg-gradient-to-bl from-black rounded-xl'>
            <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/640px-Netflix_2014_logo.svg.png" alt="netflix-logo"></img>
            { user && <div className='flex'>
            {/* <img className='h-12 w-12' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="user"></img> */}
            <img className='h-12 w-12' src={user?.photoURL} alt="user"></img>
            <button className='text-white h-3 3-6 p-3' onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
    )
}

export default Header