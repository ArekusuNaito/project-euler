import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import knightStore from './naito-version/store'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {KnightApp} from './naito-version'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={knightStore}>
      {/* <App /> */}
      <KnightApp/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
