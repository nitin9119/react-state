import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  let [count,setCount] = useState(0);

  const counterVal=(value)=>{
    setCount(count+value)
  }
  const doubVal=(val)=>{
    setCount(count*val)
  }
  return (
    
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>counterVal(1)}>Add 1</button>
      <button onClick={()=>counterVal(-1)}>Substract 1</button>
      <button onClick={()=>doubVal(2)}>double</button>
    </div>
  );
}

export default App;
