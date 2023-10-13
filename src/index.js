import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers';
import { getProducts } from './Actions/products.action';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: 
   rootReducer,
   devTools: true,
});

store.dispatch(getProducts());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

