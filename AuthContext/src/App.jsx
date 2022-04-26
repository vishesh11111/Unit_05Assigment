import { useContext} from 'react';
import './App.css';
import { DataDisplay } from './components/DataDisplay';
import { Navbar } from './components/Navbar';
import {AuthContext} from "./contexts/AuthContext"
function App() {
const {isAuth, setAuth} = useContext(AuthContext)

  return (
    <div className="App">
     <Navbar />
     <div>
       {isAuth ===false ? "" : <DataDisplay />}
     </div>
    </div>
  );
}

export default App;
