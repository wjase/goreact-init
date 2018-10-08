import { DATA_LOADED } from './types';
import { THINGS_LOADED } from './types';
import { DataApi } from '../api/dataApi'
import { ThingsApi } from '../api/thingsApi'

// An action takes an object payload and generates an event with it
// Each event has a type and an optional payload
export const dataLoaded = (data) => ({
    type: DATA_LOADED,
    payload: data
});


// Async function events return a function which takes a dispatch
// Sometimes these are called thunks. (hence redux-thunk elsewhere)
// The dispatch is a callback to call when the api call returns  
export const fetchAsyncDataRequest = () => {
    return (dispatch) => {
        // This API call returns a Promise object to handle the re
        DataApi
            .get()
            .then((data => {
                dispatch(dataLoaded(data))
            })).catch(reason => {
                console.dir({ fetchFailed: reason });
            });
    }
}

export const thingsLoaded = (things) => ({
    type: THINGS_LOADED,
    payload: things
});

export const fetchAsyncThings = () => {
    return (dispatch) => {
        dispatch(dataLoaded({'msg':'Loading things now...'}));
        ThingsApi
            .get()
            .then((things => {
                dispatch(thingsLoaded(things))
            })).catch(reason => {
                console.dir({ fetchFailed: reason });
            });

    }
}