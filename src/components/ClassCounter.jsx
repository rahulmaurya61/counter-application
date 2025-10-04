import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0
    }));
  };

  render() {
    return (
      <div className="counter-card class-component">
        <h2 className="component-heading">Class Component </h2>
        <div className="count-display">{this.state.count}</div>
        <div className="buttons-container">
          <button onClick={this.decrement} disabled={this.state.count === 0} className="decrement-button">
            -
          </button>
          <button onClick={this.increment} className="increment-button">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
