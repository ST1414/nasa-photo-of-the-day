import React, { useState, useEffect }  from "react";
import "./App.css";
import axios from 'axios';
import { NASA_URL } from './constants';


function App() {
  
  // SLICE OF STATE (1)
  const [ pod, setPod ] = useState(null);

  // USE EFFECT + API CALL (3)
  useEffect( () => {
    axios.get(NASA_URL)
      .then (response => {
        setPod(response.data);
      })
      .catch (error => {
        console.log('ERROR: ', error);

      })
  }, [])
  
  // Can run a loading note here OR in the render
  // if (!pod) return <h3>Loading...</h3>;


  return (
    <div className="App">
      <h1>NASA PICTURE OF THE DAY</h1>
      { pod ? (
        <>
          <h2>{pod.title}</h2>
          <p>By {pod.copyright}</p>
          <img src={pod.url} alt={pod.title}/>
          <p>{pod.explanation}</p>
        </>
      ): <h3>Loading...</h3>
    }
      
    </div>
  );

}

export default App;


