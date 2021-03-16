import React from 'react'
import '../src/components/Style.css'
import { useDispatch, useSelector } from 'react-redux'
import { increase,  decrease } from './action/Action'

function App() {

  const counter = useSelector(state => state.Counter)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <h1>REDUX</h1>
      <h3>Counter {counter}</h3>
      <button onClick={() => dispatch(increase())}> ➕ </button>
      <button onClick={() => dispatch(decrease())}> ➖ </button>
    </div>
  );
}

export default App;
