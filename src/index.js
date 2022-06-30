// First code file which we will be executed whenever this page is loaded.

import React from 'react';
// ReactDOM, this package, is exporting some React DOM object.
import ReactDOM from 'react-dom/client';
import './index.css';
// Omit .js as the extension in the imports here.
// If it's another file, like a CSS file, you have to add it.
// But if it's a third-party library or one of JS file, omit the .js.
import App from './App';

// Call a method on it, the createRoot method.
// This crates basically the main entry point,
// the main hook of the overall user interface you are about to build with React. 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
