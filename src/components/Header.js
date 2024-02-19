import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store=> store.user);
    const dispatch = useDispatch();
    const handleSignOut = () =>{
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse');
            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className='flex justify-between z-10 w-full absolute p-8 bg-gradient-to-bl from-black rounded-xl'>
            <img className='w-56' src={NETFLIX_LOGO} alt="netflix-logo"></img>
            { user && <div className='flex'>
            {/* <img className='h-12 w-12' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="user"></img> */}
            <img className='h-12 w-12' src={user?.photoURL} alt="user"></img>
            <button className='text-white h-3 3-6 p-3' onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
    )
}

export default Header