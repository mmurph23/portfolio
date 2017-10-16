import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const store = configureStore({
  STATE: {
       name:'',
       trans1: false
  }
});

ReactDOM.render(
  <Provider store={store}>
       <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
