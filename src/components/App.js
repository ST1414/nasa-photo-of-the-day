import React, { useState, useEffect }  from "react";
import "./App.css";
import axios from 'axios';
import { NASA_URL } from '../constants';
import Pod from './Pod.js'

import styled, { keyframes } from 'styled-components';


const StyledPod = styled.div`
  
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }
`

// const StyledSubPod = styled.div`
//   *{
//     /* border: 1px red solid; */
//   }

//   display: flex;
//   flex-direction: column;
//   align-items: center;
  
//   width: 95%;
//   margin: auto;
//   padding: 10px;

//   background-color: ${props => props.theme.subBackgroundColor};
//   border: 2px black solid;
//   border-radius: 10px;

//   h2 {
//     color: ${props => props.theme.secondaryColor};
//   }
//   h3 {
//     color: ${props => props.theme.secondaryColor};
//   }
//   p {
//     color: ${props => props.theme.secondaryColor};
//   }
//   img {
//     border-radius: 10px;
//     margin: 10px;
//     max-width: 100%;
//     object-fit: cover;
//   }
// `

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
    // <div className='App'></div>
    // <div></div>
    <StyledPod>
      <h1>NASA PICTURE OF THE DAY</h1>
      <Pod pod={pod}/>
    </StyledPod>
  );

}

export default App;

// return (
//   // <div className='App'></div>
//   // <div></div>
//   <StyledPod>
//     <h1>NASA PICTURE OF THE DAY</h1>
//     <StyledSubPod>
//       <h2>{pod.title}</h2>
//       <h3>By {pod.copyright}</h3>
//       <img src={pod.url} alt={pod.title}/>
//       <p>{pod.explanation}</p>
//     </StyledSubPod>
    
//   </StyledPod>
// );
