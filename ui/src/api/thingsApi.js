
export const ThingsApi = {

    get : ()=>{
        // todo api calls here
        return fetch('/api/v1/things').then(
            response =>  response.json(),
            error => console.dir({'error':error})
          );
    }
};

