import { THINGS_LOADED} from './actionConstants';
import { ThingsApi } from '../api/thingsApi'
import { alertChanged } from './alertsActions'


export const thingsLoaded = (things) => ({
    type: THINGS_LOADED,
    payload: things
});

export const fetchAsyncThings = () => {
    return (dispatch) => {
        ThingsApi
            .getThings()
            .then((things => {
                dispatch(thingsLoaded(things))
            })).catch(reason => {
                console.dir({ fetchFailed: reason });
            });
    }
}

export const addAsyncThing = (toAdd) => {
    return (dispatch) => {
        dispatch(alertChanged({'msg':'Adding '+JSON.stringify(toAdd)}));
        ThingsApi
            .add(toAdd)
            .then((thing => {
                dispatch(fetchAsyncThings())
            })).catch(reason => {
                console.dir({ addFailed: reason });
            });
    }
}