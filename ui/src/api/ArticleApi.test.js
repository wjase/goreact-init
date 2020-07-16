import { articleApi } from './ArticleApi.js'
import nock from 'nock'
import axios from 'axios'
jest.mock('axios');

describe('ArticleApi', () => {
  it('Fetches from the internet', async () => {

    const articles = {hits:[
      {"objectID":1,"title":"title1"},
      {"objectID":2,"title":"title2"},
      {"objectID":3,"title":"title3"}
    ]};

    const resp = {data: articles};
    axios.get.mockResolvedValue(resp);
    let result = await articleApi.getArticles()

    expect(result.length).toEqual(3);
  })
});