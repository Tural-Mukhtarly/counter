import React, { useState } from 'react'
import Counter from './components/Counter/Counter';

function App() {

  const [state, setState] = useState<number>(0)
  const handleClick = () => setState(prev => prev + 1)
  const clearState = () => setState(0)

  function addState(title: any) {
    setState(20)
  }

  console.log(state);

  return (
    <div className="App">
      <Counter handleClick={handleClick} clearState={clearState} state={state} addState={addState} />
    </div>
  );
}

export default App;
