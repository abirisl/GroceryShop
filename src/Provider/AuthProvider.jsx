import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect } from 'react'
import auth from '../firebase.init'
import { useState } from 'react'

export const AuthContext = createContext(null)

function AuthProvider({ children }) {

  const [user, setUser] = useState()

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  const createUSer = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleUSer = async () => {
    // Your Google sign-in implementation
    // Example:
    try {
      const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
      // Handle successful sign-in
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  const signOutUser = () => {
    return signOut(auth)
  }

  const authInfo = {
    user,
    createUSer,
    signUser,
    googleUSer,
    signOutUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

// // AuthProvider.js
// import { createContext, useContext, useState } from 'react';
// import auth from '../firebase.init';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         setUser(userCredential.user);
//         setLoading(false);
//         return userCredential;
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//         throw error;
//       });
//   };

//   const value = {
//     user,
//     loading,
//     error,
//     createUser,
//     // অন্যান্য ফাংশন যোগ করুন
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }