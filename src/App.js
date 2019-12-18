import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  
  const counter = useSelector(state => state.counter);
  var isLogged = useSelector(state => state.isLogged);
  if(counter >= 25)
  {
    isLogged= true;
  }
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1 >Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onMouseDown={() => dispatch(decrement())}>-</button>
        {isLogged ? <h3>You've incremented 5 times</h3> : ''}
      </header>
    </div>
  );
}
export default App;
