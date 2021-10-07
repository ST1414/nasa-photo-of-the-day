import React, { useState, useEffect }  from "react";
import "./App.css";
import axios from 'axios';
import { NASA_URL } from './constants';


function App() {
  
  // Slide of state(1)
  // Use Effect w. API Call (3)
  // Return passing JSX w. Ternary for Loading h2 (2)

  const [ pod, setPod ] = useState(null);

  useEffect( () => {
    axios.get(NASA_URL)
      .then (response => {
        setPod(response.data);
      })
      .catch (error => {
        console.log('ERROR: ', error);

      })
  }, [])
  
  // if (!pod) return <h3>Loading...</h3>;  // Can run a loading note here OR in the render

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


// <> is a react fragment