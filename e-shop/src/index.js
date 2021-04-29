import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  //proviser allows us to access to all of the things related to the store that we're going
  // to put all of the actual code we want to store on our reading state
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);