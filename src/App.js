
import './App.css';
import { useState } from 'react';
import Counter from './components/counter/Counter';
import Bulb from './components/bulb/Bulb';

function App() {

  const [isDarkModeOn, setDarkMode] = useState();
  let btnText = isDarkModeOn ? "Dark Mode Turn OFF" : "Dark Mode Turn On";

  

  return (
    <div style={isDarkModeOn ? {backgroundColor:"black", color: "white",textAlign: "center", padding: 30}: {textAlign: "center",padding: 30}}>
      
      {isDarkModeOn ? <h2>Dark mode is ON</h2> : <h2>Dark mode is OFF</h2>}
      <br></br>
      <button style={{color: "green",backgroundColor: "white"}} onClick={()=>{
        setDarkMode(!isDarkModeOn);
      }}>{btnText}</button>
      
      <Counter />

      <Bulb/>
    </div>
  );
}

export default App;
