import React from 'react';

export const Counter = () => {

    const [count, setCount] = React.useState(0);

    return (
        <div>
            <div>
                <span id='counttext'>{count}</span>
            </div>
      <button id='incr_btn' type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button id='decr_btn' type="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>


        </div>
    );


};

export default Counter;