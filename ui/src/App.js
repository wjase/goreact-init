import React from 'react';
import { Counter } from './Components/Counter/Counter.js'
import { SomeComponent } from './Components/SomeComponent/SomeComponent.js'

const initialData = {
  articles: [],
  error: null,
};

const App = () => {

  return (
    <div>
      <Counter />
      <SomeComponent initialData={initialData}/>
    </div>
  );
};


export default App;