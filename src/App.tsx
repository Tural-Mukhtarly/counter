import React, { useState } from 'react'
import Counter from './components/Counter/Counter';



function App() {

  const [state, setState] = useState<number>(5)

  const handleClick = () => setState(prev => prev + 1)
  const clearState = () => setState(0)

  function addState(max: number) {
    setState(max)
  }


  return (
    <div className="App">
      <Counter handleClick={handleClick} clearState={clearState} state={state} addState={addState} />
    </div>
  );
}



export default App;