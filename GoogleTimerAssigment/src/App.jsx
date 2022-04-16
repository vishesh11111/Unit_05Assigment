// import logo from './logo.svg';
import './App.css';

// import StopWatch from "./components/stopwatch";
import {StopWatch} from "./components/stoptime"
import {SetTimer} from "./components/SetTimer";
   
function App() {
  return (
    <div className="App">
      <div className='main-1'>
      <SetTimer />
      </div>
      <div className='main-2'>
      <StopWatch />
      </div>
    </div>
  );
  }
  export default App;

