import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Predictions } from 'aws-amplify';

function App() {
  const [response, setResponse] = useState('Please upload a photo...');
  const identify = async (event) => {
    setResponse('Identifying text...');
    const { target: { files }} = event;
    const file = files[0];
    const data = await Predictions.identify({
      text: { source: { file }, format: "PLAIN" } // PLAIN, FORM, TABLE, ALL
    });
    setResponse(data.text.fullText);
  }
  return (
    <div className="App">
      <h3>Text identification</h3>
      <input
        type="file" onChange={identify}
      />
      <p>{response}</p>
    </div>
  );
}

export default App;
