import React from 'react'
import '../src/components/Style.css'
import { useSelector } from 'react-redux'

function App() {

  const counter = useSelector(state => state.Counter)


  return (
    <div className="App">
      <h1>REDUX</h1>
      <h3>Counter {counter}</h3>
    </div>
  );
}

export default App;
