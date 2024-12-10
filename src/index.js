// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { ThemeProvider, createTheme } from '@mui/material/styles';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useEffect } from 'react';



 
   
 

const theme = createTheme();
const root = ReactDOM.createRoot(document.getElementById('root'));


 


root.render(
  <ThemeProvider theme={theme}>
    
    <App  />
   
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { useMatomo } from '@datapunt/matomo-tracker-react';

// const theme = createTheme();

// const MatomoWrapper = () => {
//   const { trackPageView } = useMatomo();

//   useEffect(() => {
    
//     trackPageView({});
//   }, []);

//   return <App />;
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <ThemeProvider theme={theme}>
//     <MatomoWrapper />
//   </ThemeProvider>
// );


// reportWebVitals();

