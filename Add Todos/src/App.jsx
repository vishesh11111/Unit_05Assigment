// import { useState } from 'react'
import './App.css'
import {Route , Routes} from "react-router-dom"
import {Home} from "./components/Home";
import {Todos} from './components/Todo';
import {TodosDetals} from "./components/Todosdtals";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/todos' element={<Todos/>}></Route>
        <Route path='/todos/:id' element={<TodosDetals/>}></Route>
        {/* <Route path='/hello' element={<HelloMe/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
