import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import baseReducers from './redux/reducers';
import './public/css/index.css';

// Import necessary container
import Navbar from './containers/navbar/Navbar';
import Detail from './containers/detail/Detail';
import Map from './containers/map/Map';

const store = createStore(baseReducers);

const entryBoilerPlate = (
  <Provider store={store}>
    <div>
      <Navbar/>
      <div className="content">
        <Detail/>
        <Map/>
      </div>
    </div>
  </Provider>
);

ReactDOM.render(entryBoilerPlate, document.getElementById('root'));
