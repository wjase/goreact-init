import { ALERT_CHANGED } from './actionConstants';
import { DataApi } from '../api/dataApi'

// An action takes an object payload and generates an event with it
// Each event has a type and an optional payload
export const alertChanged = (msg) => ({
    type: ALERT_CHANGED,
    payload: msg
});

// Async function events return a function which takes a dispatch
// Sometimes these are called thunks. (hence redux-thunk elsewhere)
// The dispatch is a callback to call when the api call returns  
export const fetchAsyncDataRequest = () => {
    return (dispatch) => {
        // This API call returns a Promise object to handle the request
        DataApi
            .get()
            .then((data => {
                dispatch(alertChanged(data))
            })).catch(reason => {
                console.dir({ fetchFailed: reason });
            });
    }
}
