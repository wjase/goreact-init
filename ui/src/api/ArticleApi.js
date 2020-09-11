import axios from 'axios';

const getArticles = () => {
    var promise = new Promise(function (resolve, reject) {
        // do a thing, possibly async, then…
        axios
            .get('http://hn.algolia.com/api/v1/search?query=react')
            .then(response => {
                resolve(response.data.hits)
            })
            .catch(() => {
                reject(Error('ERROR'))
            });
    });
    return promise;
}

export const articleApi = {
    getArticles: getArticles
}