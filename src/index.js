import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CartItem from './CartItem'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CartItem />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
