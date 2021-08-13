import React from 'react';
import './style.css';
import { CounterContext, NameContext } from '../context';

export default function Test3() {
  return (
    <CounterContext.Consumer>
      {context => {
        return (
          <NameContext.Consumer>
            {nameContext => {
              return (
                <>
                  <h1>Hello Test3!</h1>
                  <p>Name-{nameContext.name}</p>
                  <h4>Counter Value = {context.count}</h4>
                  <button onClick={context.increment}>Increment Test 3</button>
                  <br />
                  <br />
                  <button onClick={context.decrement}>Decrement Test 3</button>
                  <br />
                  <br />
                  <button onClick={context.reset}>Reset Test 3</button>
                </>
              );
            }}
          </NameContext.Consumer>
        );
      }}
    </CounterContext.Consumer>
  );
}
