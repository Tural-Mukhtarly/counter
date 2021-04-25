import React, { ChangeEvent, useState } from 'react'
import Counter from './components/Counter/Counter';

function App() {


  const [startState, setStartState] = useState<number>(0)
  const [start, setStart] = useState<number>(0)
  const [max, setmax] = useState<number>(0)

  console.log(max);



  const handleClick = () => setStartState(prev => prev + 1)
  const clearState = () => setStartState(start)

  function addState(max: number) {
    setStartState(max)
  }

  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStart(e.currentTarget.valueAsNumber)
  }

  const onChangeMaxtHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setmax(e.currentTarget.valueAsNumber)
  }

  return (
    <div className="App">
      <Counter
        handleClick={handleClick}
        clearState={clearState}
        startState={startState}
        addState={addState}
        start={start}
        onChangeStartHandler={onChangeStartHandler}
        max={max}
        onChangeMaxtHandler={onChangeMaxtHandler} />
    </div>
  );
}


export default App;