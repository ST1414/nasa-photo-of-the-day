import React, { useState, useEffect }  from "react";
import "./App.css";
import axios from 'axios';
import { NASA_URL } from './constants';

// ----- STEP 6: Import styled + keyframes components; create our new Element & Keyframe
import styled, { keyframes } from 'styled-components';

const StyledPod = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  padding: 5px;
  margin: auto;

  background-color: ${props => props.theme.backgroundColor};
  width: 95%;
 
  h1 {
    color: ${props => props.theme.primaryColor};
    /* text-align: center; */
    border: 2px red solid;
  }
  h2 {
    color: ${props => props.theme.secondaryColor};
    /* text-align: center; */
  }
  h3 {
    color: ${props => props.theme.secondaryColor};
    /* text-align: center; */
  }
  p {
    color: ${props => props.theme.secondaryColor};
  }
`



function App() {

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
  
  if (!pod) return <h3>Loading...</h3>;

  return (
    <StyledPod>
      
      <h1>NASA PICTURE OF THE DAY</h1>
      <h2>{pod.title}</h2>
      <h3>By {pod.copyright}</h3>
      <img src={pod.url} alt={pod.title}/>
      <p>{pod.explanation}</p>

    </StyledPod>
  );

}

export default App;


// <StyledPod>
      
//       <h1>NASA PICTURE OF THE DAY</h1>
//       { pod ? (
//         <>
//           <h2>{pod.title}</h2>
//           <p>By {pod.copyright}</p>
//           <img src={pod.url} alt={pod.title}/>
//           <p>{pod.explanation}</p>
//         </>
//       ): <h3>Loading...</h3>
//       }
    
  
//   </StyledPod>

