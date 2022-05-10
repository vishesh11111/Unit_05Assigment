

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../feartures/useSlice';

const LogOut = () => {
    const dispatch =useDispatch();
    const user = useSelector(selectUser)

const hadleLogOut = (e) =>{
    e.preventDefault();

    dispatch(logout())
}

  return (
    <div>
    <h1>Welcome <span className='user_name'>Welcome Home Page : {user.name}</span></h1>
    <button className='logOut_Button' onClick={(e)=> hadleLogOut(e)}>LogOut</button>
    </div>
  )
}

export default LogOut