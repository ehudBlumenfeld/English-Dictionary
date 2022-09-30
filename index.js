import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {  createStore  } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducer';


const appStore=createStore(appReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={appStore}> 
 
    <App />
 
  </Provider>
  
);

reportWebVitals();
