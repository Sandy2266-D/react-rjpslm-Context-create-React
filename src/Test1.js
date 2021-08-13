import React from 'react';
import './style.css';
import Test2 from './Test2';
import { CounterContext } from '../context';

// export default function Test1(props) {
//   return (
//     <CounterContext.Consumer>
//       {context => {
//         return (
//           <>
//             <h1>Hello Test1!</h1>
//             <p>count ={context.count}</p>
//             <button onClick={context.increment}>Increment Test 1</button>
//             <br />
//             <br />
//             <button onClick={context.decrement}>Decrement Test 1</button>
//             <br />
//             <br />
//             <button onClick={context.reset}>Reset Test 1</button>
//             <Test2 />
//           </>
//         );
//       }}
//     </CounterContext.Consumer>
//   );
// }
export default class Test1 extends React.Component {
  // incrementFromTest1 = () => {
  //   this.context.increment();
  // };
  static ContextType = CounterContext;
  render() {
    return (
      <>
        <h1>Hello Test1!</h1>
        <p>count ={this.context.count}</p>
        <button onClick={this.context.increment}>Increment Test 1</button>
        <br />
        <br />
        <button onClick={this.context.decrement}>Decrement Test 1</button>
        <br />
        <br />
        <button onClick={this.context.reset}>Reset Test 1</button>
        <Test2 />
      </>
    );
  }
}
