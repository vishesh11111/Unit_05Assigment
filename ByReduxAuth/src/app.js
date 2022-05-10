
import React from 'react'
import Login from './components/Login'
import "./App.css"
import { useSelector } from 'react-redux'
import { selectUser } from './feartures/useSlice'
import LogOut from './components/LogOut'
import { TODO } from './components/Todo'

const App = () => {
const user = useSelector(selectUser)


  return (
    <div>
        <div>Please Login </div>
       {user ? <TODO/> : ""}
        {user ? <LogOut/> : <Login/>}
        {/* <Login/> */}
    </div>
  )
}

export default App