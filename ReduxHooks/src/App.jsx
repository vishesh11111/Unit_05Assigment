// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Home } from './components/home'
import {Routes, Route} from "react-router-dom";
import {Personal} from "./components/Personal";
import {Official} from "./components/official";
import {Other} from "./components/others"
import { OfficialDetails } from './components/Details/OfficialDetails';
import { OtherDetaits } from './components/Details/OtherDetails';
import {PersonalDetails} from "./components/Details/PersonalDetails"
import { Login } from './components/login';
import {SingUp} from "./components/SignUp";

function App() {
  
  return (
    <div className="App">


    {/* Set Route */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/personal/:id' element={<PersonalDetails/>}></Route>
      <Route path='/official/:id' element={<OfficialDetails/>}></Route>
      <Route path='/others/:id' element={<OtherDetaits/>}></Route>
      <Route path='/personal' element={<Personal/>}></Route>
      <Route path='/official' element={<Official/>}></Route>
      <Route path='/others' element={<Other/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signUp' element={<SingUp/>}></Route>
    </Routes>
    </div>
  )
}

export default App
