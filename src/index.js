import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import App from './App';
import Product from './Product';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import AddtoCart from './AddtoCart';
import Reducer from './Reducer/index'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store1=createStore(Reducer)
root.render(
  <Provider store={store1}>
  <Router>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
      <Route path='/Product' element={<Product></Product>}></Route>
      <Route path='/AddtoCart' element={<AddtoCart></AddtoCart>}></Route>
    </Routes>
  </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
