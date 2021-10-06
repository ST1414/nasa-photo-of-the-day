import React, { useState, useEffect }  from "react";
import "./App.css";
import Axios from 'axios';
import { NASA_URL } from './constants';


function App() {
  
  // SLICE OF STATE (1)
  const [ pod, setPod ] = useState({});

  // USE EFFECT (3)
    // API CALL
  useEffect( () => {
    
  }, [])
  
  // REACT RENDER ... USE API DATA (2)(4)
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
