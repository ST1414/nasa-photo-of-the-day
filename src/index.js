import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


// ----- STEP 1: Run %: npm install styled-components
// ----- STEP 2: Create theme.js under theme folder

import { ThemeProvider } from "styled-components"; // ----- STEP 3: Import ThemeProvider from styled-components
import theme from './theme'; // ----- STEP 4: Import theme.js from theme folder


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, 
    
    document.getElementById("root")
);
