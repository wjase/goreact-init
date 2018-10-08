import { DATA_LOADED,THINGS_LOADED } from "../actions/types";
import { combineReducers } from 'redux'

// A reducer is an event listener which morphs the current state
// This reducer state is just the 'data' part of the global state below
// 'data' is an arbitrary name - call it whatever you like
function onDataLoaded(state = [], action) {
  switch (action.type) {
    case DATA_LOADED:
    console.dir({'Data loaded':action.payload});
      return action.payload;
    default:
      return state;
  }
}

// A reducer is an event listener which morphs the current state
// This reducer state is just the 'data' part of the global state below
// 'data' is an arbitrary name - call it whatever you like
function onThingsLoaded(state = [], action) {
  switch (action.type) {
    case THINGS_LOADED:
      return action.payload;
    default:
      return state;
  }
}


// The key of this object param will be the key in the  global state,
// each bit of state you wish to manage in redux will have akey and reducer
export default combineReducers(
  {
    data: onDataLoaded,
    things: onThingsLoaded
  });

