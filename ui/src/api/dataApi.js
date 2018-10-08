export const DataApi = {

    get : ()=>{
        // todo api calls here
        return fetch('/api/v1/data').then(response => {
            return response.json()
          }).catch(error => {
            return error
          });
        // return new Promise(function (resolve, reject) {
        //     setTimeout(()=>{
        //         resolve({msg:'hello world'});
        //     },2000);
        //   });
    }
};

