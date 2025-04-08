import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate } from 'react-router-dom'
import Loading from '../pages/Shared/Loading'

function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }

  return (
    <Navigate to="/login"></Navigate>
  )
}

export default PrivateRoute