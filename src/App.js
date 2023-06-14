import React, {useState} from 'react';

export const App = () => {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')

  const onSubmit = () => {
    setResult(name)
  }

  return (
    <div>
      <p data-testid={"title"}>fixed again</p>
      <input data-testid={"nameInput"} placeholder={"Your name"} onInput={e => setName(e.currentTarget.value)}/>
      <button data-testid={"submitButton"} onClick={onSubmit}>Show my name</button>

      {!!result && <p data-testid={"resultText"}>Your name is {result}</p>}
    </div>
  );
};
