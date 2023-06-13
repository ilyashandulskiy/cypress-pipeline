import React, {useState} from 'react';

export const App = () => {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')

  const onSubmit = () => {
    setResult(name)
  }

  return (
    <div>
      <input placeholder={"Your name"} onInput={e => setName(e.currentTarget.value)}/>
      <button onClick={onSubmit}>Show my name</button>

      {!!result && <p>Your name is {result}</p>}
    </div>
  );
};
