
export const ThingsApi = {

    getThings : ()=>{
        return fetch('/api/v1/things').then(
            response =>  response.json(),
            error => console.dir({'error':error})
          );
    },

    add : (thingToAdd)=>{
        return fetch('/api/v1/things',{
            method:'post',
            body:JSON.stringify(thingToAdd)
        }
        ).then(
            response =>  response.json(),
            error => console.dir({'error':error})
          );

    }
};

