import React, {useState} from 'react';

export const App = () => {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')
  const [counter, setCounter] = useState(0)

  const onSubmit = () => {
    setResult(name)
  }

  return (
    <div>
      <p data-testid={"title"}>fixed again</p>
      <input data-testid={"nameInput"} placeholder={"Your name"} onInput={e => setName(e.currentTarget.value)}/>
      <button data-testid={"submitButton"} onClick={onSubmit}>Show my name</button>

      {!!result && <p data-testid={"resultText"}>Your name is {result}</p>}

      <div style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        <button data-testid={"decrement"} onClick={() => setCounter(prev => prev-1)}>decrement</button>
        <h2 data-testid={"counter"}>{counter} count</h2>
        <button data-testid={"increment"} onClick={() => setCounter(prev => prev+1)}>increment</button>
      </div>
    </div>
  );
};
