import React, { useState, useRef } from 'react'
import Header from './Header'
import { validateFields } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NETFLIX_BACKGROUND, PHOTO_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
  }

  const handleSignIn = () => {
    const message = validateFields(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value, photoURL: PHOTO_URL
          }).then(() => {
            // Profile updated!
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message)
          });
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
          // ..
        });
    }

    else {
      //Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

          // Signed in 
          const user = userCredential.user;
          console.log("sign in ", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorMessage ", errorMessage);
          setErrorMessage(errorMessage)
        });
    }
  }

  return (
    <div>
      <Header />
      <div>
        <img className="absolute h-screen w-screen" src={NETFLIX_BACKGROUND} />
      </div>


      <form onSubmit={(event) => event.preventDefault()} className='absolute p-8 bg-black bg-opacity-60 rounded-lg border-2 right-0 left-0 top-1/4  w-1/5 mx-auto'>
        <h1 className='font-bold text-3xl py-2 text-white'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isSignInForm && <input ref={name} className='mt-6 p-2 w-full bg-gray-100 rounded-md' type="text"  placeholder='Name' />}
        <input ref={email} className='mt-6 p-2 w-full bg-gray-100 rounded-md' type="email" placeholder='Email ID' ></input>
        <input ref={password} className='mt-6 p-2 w-full bg-gray-100 rounded-md' type="password" placeholder='Password' />
        <p className='text-red-700 pt-2 m-1'>{errorMessage}</p>
        <button className='w-full mt-8 font-bold text-white p-2 bg-red-600 rounded-md' onClick={handleSignIn}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <div onClick={toggleSignInForm} className='text-red-600 mt-4 ml-2 inline-block'>{isSignInForm ?
          <p>New to Netflix? <b className='hover:underline cursor-pointer'>Sign up now.</b></p> :
          <p>Alrady a User? <b className='hover:underline cursor-pointer'>Sign In.</b></p>}
        </div>
      </form>
    </div>
  )
}

export default Login