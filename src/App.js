import React, { useState, useEffect }  from "react";
import "./App.css";
import axios from 'axios';
import { NASA_URL } from './constants';


function App() {
  
  // SLICE OF STATE (1)
  const [ pod, setPod ] = useState({});
  // const [ load, setLoad ] = useState(''); // ERROR HANDLING

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
  
  // // Display a loading message while the data is fetching
  // if (!pod) return <h3>Loading...</h3>;
  // // Display your component as normal after the data has been fetched
  // return (
  //   {/* your normal JSX here */}
  // );


  // REACT RENDER ... USE API DATA (2)(4)
  return (
    <div className="App">
      <h1>NASA PICTURE OF THE DAY</h1>
      <h2>{pod.title}</h2>
      <p>By {pod.copyright}</p>
      <img src={pod.url} alt={pod.title}/>
      <p>{pod.explanation}</p>
      {/* ERROR HANDLING? */}
    </div>
  );
}

export default App;


