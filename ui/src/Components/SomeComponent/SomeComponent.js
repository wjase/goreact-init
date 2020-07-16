import React from 'react';
import { articleApi } from '../../api/ArticleApi.js'

export const dataReducer = (state, action) => {
  if (action.type === 'SET_ERROR') {
    return { ...state, articles: [], error: true };
  }

  if (action.type === 'SET_ARTICLES') {
    return { ...state, articles: action.articles, error: false };
  }

  throw new Error();
};

export const useArticles = (initialData)=>{
  const [data, dispatch] = React.useReducer(dataReducer, initialData);
   
  React.useEffect( () => {
      articleApi.getArticles()
      .then(articles => {
        dispatch({ type: 'SET_ARTICLES', articles });
      }).catch(() => {
        dispatch({ type: 'SET_ERROR' });
      });
  }, []);

  return data
}

export const SomeComponent = ({initialData}) => {

  let data = useArticles(initialData)

  return (
    <div>
      <h2>My Async Data</h2>

      {data.error && <div className="error">Error</div>}

      <ul>
        {data.articles.map(item => (
          <li key={item.objectID}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};


export default SomeComponent;