import App, { dataReducer } from './SomeComponent.js';
 
const articles = ['a', 'b', 'c'];
 
describe('App', () => {
  describe('Reducer', () => {
    it('should set a list of articles', () => {
      const state = { articles: [], error: null };
      const newState = dataReducer(state, {
        type: 'SET_ARTICLES',
        articles,
      });
 
      expect(newState).toEqual({ articles, error: false });
    });
  });
 
});