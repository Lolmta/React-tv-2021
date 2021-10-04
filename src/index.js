import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ShowState from './context/shows/ShowState'



ReactDOM.render(
  <ShowState>
    <App />
  </ShowState>,
  document.getElementById('root')
);


reportWebVitals();
