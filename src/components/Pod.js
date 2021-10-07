import React  from "react";
import styled, { keyframes } from 'styled-components';

const StyledSubPod = styled.div`
  *{
    /* border: 1px red solid; */
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  width: 90%;
  margin: auto;
  padding: 20px;

  background-color: ${props => props.theme.subBackgroundColor};
  border: 2px black solid;
  border-radius: 10px;

  h2 {
    color: ${props => props.theme.secondaryColor};
  }
  h3 {
    color: ${props => props.theme.secondaryColor};
  }
  p {
    color: ${props => props.theme.secondaryColor};
  }
  img {
    border-radius: 10px;
    margin: 10px;
    max-width: 100%;
    object-fit: cover;
  }
`
function Pod(props) {
  const { pod } = props;
  return (

    <StyledSubPod>
      <h2>{pod.title}</h2>
      <h3>By {pod.copyright}</h3>
      <img src={pod.url} alt={pod.title}/>
      <p>{pod.explanation}</p>
    </StyledSubPod>

  );
  
}
  
  export default Pod;
