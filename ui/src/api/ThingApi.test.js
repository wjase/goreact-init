import { ThingApi } from './ThingApi.js'
import axios from 'axios'
jest.mock('axios');

describe('ThingApi', () => {

  it('Fetches from the internet', async () => {

    const things = [
      { "name": "bob", "id": 1 },
      { "name": "bob2", "id": 2 },
      { "name": "bob3", "id": 3 },
      { "name": "bob4", "id": 4 },
      { "name": "bob5", "id": 5 }];

    const resp = {data: things};
    axios.get.mockResolvedValue(resp);

    let result = await ThingApi.getThings()

    expect(result.length).toEqual(5);
  })
});