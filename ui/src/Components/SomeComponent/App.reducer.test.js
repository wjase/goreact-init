import App, { dataReducer } from './SomeComponent.js';
 
const things = ['a', 'b', 'c'];
 
describe('App', () => {
  describe('Reducer', () => {
    it('should set a list of things', () => {
      const state = { things: [], error: null };
      const newState = dataReducer(state, {
        type: 'THINGS_UPDATED',
        things,
      });
 
      expect(newState).toEqual({ things, error: false });
    });
  });
 
});