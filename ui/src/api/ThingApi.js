import axios from 'axios';

const getThings = () => {
    var promise = new Promise(function (resolve, reject) {
        // do a thing, possibly async, then…
        axios
            .get('/api/v1/articles')
            .then(response => {
                resolve(response.data)
            })
            .catch(() => {
                reject(Error('ERROR'))
            });
    });
    return promise;
}

export const thingApi = {
    getThings:getThings
}

