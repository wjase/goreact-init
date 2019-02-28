import { ALERT_CHANGED,THINGS_LOADED,THINGS_ADDED } from "../actions/actionConstants";
import { combineReducers } from 'redux'

// A reducer is an event listener which morphs the current state
// This reducer state is just the 'data' part of the global state below
// 'payload' is an arbitrary name - call it whatever you like
function onAlertStateChanged(state = [], action) {
  switch (action.type) {
    case ALERT_CHANGED:
    console.dir({'AlertChanged':action.payload});
      return action.payload;
    default:
      return state;
  }
}

// A reducer is an event listener which morphs the current state
// This reducer state is just the 'data' part of the global state below
// 'things' is an arbitrary name - call it whatever you like
function onThingsStateChanged(state = [], action) {
  switch (action.type) {
    case THINGS_LOADED:
      return action.payload;
    default:
      return state;
  }
}

// A reducer is an event listener which morphs the current state
// This reducer state is just the 'data' part of the global state below
// 'things' is an arbitrary name - call it whatever you like
function onThingAdded(state = [], action) {
  switch (action.type) {
    case THINGS_ADDED:
      return action.payload;
    default:
      return state;
  }
}


// The key of this object param will be the key in the  global state,
// each bit of state you wish to manage in redux will have akey and reducer
// they are stored in global state but you only deal with the bits you care about
export default combineReducers(
  {
    alert: onAlertStateChanged,
    things: onThingsStateChanged,
    addedThing: onThingAdded
  });

