import React from 'react';
import { thingApi } from '../../api/ThingApi.js'

export const dataReducer = (state, action) => {
  if (action.type === 'ERROR_UPDATED') {
    return { ...state, things: [], error: true };
  }

  if (action.type === 'THINGS_UPDATED') {
    return { ...state, things: action.things, error: false };
  }

  throw new Error();
};

export const useThings = (initialData)=>{
  const [data, dispatch] = React.useReducer(dataReducer, initialData);
   
  React.useEffect( () => {
    thingApi.getThings()
      .then(things => {
        dispatch({ type: 'THINGS_UPDATED', things });
      }).catch((err) => {
        dispatch({ type: 'ERROR_UPDATED', err });
      });
  }, []);

  return data
}

export const SomeComponent = ({initialData}) => {

  let data = useThings(initialData)

  return (
    <div>
      <h2>My Async Data</h2>

      {data.error && <div className="error">Error</div>}

      <ul>
        {data.things.map(item => (
          <li key={item.objectID}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};


export default SomeComponent;