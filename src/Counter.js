import React from 'react';
import Test1 from './Test1';
import { CounterContext } from '../context';
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <CounterContext.Provider
        value={{
          count: this.state.count,
          increment: this.increment,
          decrement: this.decrement,
          reset: this.reset
        }}
      >
        <h1>Counter Application</h1>
        <h4>Counter Value = {this.state.count}</h4>
        <button onClick={this.increment}>Increment</button>
        <br />
        <br />
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <br />
        <button onClick={this.reset}>Reset</button>
        <Test1 />
      </CounterContext.Provider>
    );
  }
}
