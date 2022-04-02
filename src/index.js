import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"


render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
