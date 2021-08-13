import React from 'react';
import './style.css';
import Test3 from './Test3';
import { CounterContext } from '../context';
import { NameContext } from '../context';
// export default function Test2() {
//   return (
//     <CounterContext.Consumer>
//       {context => {
//         return (
//           <NameContext.Consumer>
//             {nameContext => {
//               return (
//                 <>
//                   <h1>Hello Test2!</h1>
//                   <p> Name- {nameContext.name}</p>
//                   <h4>Counter Value = {context.count}</h4>
//                   <button onClick={context.increment}>Increment Test 2</button>
//                   <br />
//                   <br />
//                   <button onClick={context.decrement}>Decrement Test 2</button>
//                   <br />
//                   <br />
//                   <button onClick={context.reset}>Reset Test 2</button>
//                   <NameContext.Provider value={{ name: 'Guvi' }}>
//                     <Test3 />
//                   </NameContext.Provider>
//                 </>
//               );
//             }}
//           </NameContext.Consumer>
//         );
//       }}
//     </CounterContext.Consumer>
//   );
// }

export default function Test2() {
  const counterContext = React.useContext(CounterContext);
  const nameContext = React.useContext(NameContext);
  return (
    <>
      <h1>Hello Test2!</h1>
      <p> Name- {nameContext.name}</p>
      <h4>Counter Value = {context.count}</h4>
      <button onClick={context.increment}>Increment Test 2</button>
      <br />
      <br />
      <button onClick={context.decrement}>Decrement Test 2</button>
      <br />
      <br />
      <button onClick={context.reset}>Reset Test 2</button>
      <NameContext.Provider value={{ name: 'Guvi' }}>
        <Test3 />
      </NameContext.Provider>
    </>
  );
}
