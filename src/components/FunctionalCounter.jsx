import React, { useState } from 'react';

const FunctionalCounter = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };


  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="counter-card functional-component">
      <h2 className="component-heading">Functional Component </h2>
      <div className="count-display">{count}</div>
      <div className="buttons-container">
        <button onClick={decrement} disabled={count === 0} className="decrement-button">
          -
        </button>
        <button onClick={increment} className="increment-button">
          +
        </button>
      </div>
    </div>
  );
};

export default FunctionalCounter;