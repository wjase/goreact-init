import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//state
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
//import { Provider } from 'react-redux';
//import rootReducer from './reducers';


// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)
//   );

//store.dispatch(fetchAsyncDataRequest());

store.dispatch(fetchHeats());

// ReactDOM.render(
// <Provider store={store}>
//     <App />
//   </Provider>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
