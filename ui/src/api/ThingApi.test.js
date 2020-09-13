import { thingApi } from './ThingApi.js'
import axios from 'axios'
jest.mock('axios');

describe('ThingApi', () => {

  it('Fetches from the internet', async () => {

    const things = [
      { "title": "bob", "objectID": 1 },
      { "title": "bob2", "objectID": 2 },
      { "title": "bob3", "objectID": 3 },
      { "title": "bob4", "objectID": 4 },
      { "title": "bob5", "objectID": 5 }];

    const resp = {data: things};
    axios.get.mockResolvedValue(resp);

    let result = await thingApi.getThings()

    expect(result.length).toEqual(5);
  })
});