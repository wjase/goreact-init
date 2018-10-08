import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

//state with redux and redux-thunk for async stuff
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import {fetchAsyncDataRequest} from './actions'

// The global redux data store
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );


// This is how you call an async method on page load  
store.dispatch(fetchAsyncDataRequest());

// The Provider manages state for all sub components with suitable hooks (via connect())
ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

