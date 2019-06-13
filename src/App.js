import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import ToggleColors from './components/ToggleColors';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  const [input, setInput] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    getColors();
  }, []);

  const getColors = async () => {
    const response = await fetch('http://www.colr.org/json/color/random');
    const data = await response.json();
    if (data.colors[0].tags.length > 1) {
      setColors(data.colors[0].tags);
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(input);
    setInput('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToggleColors colors={colors} inputText={text ? text : input} />
        <form  onSubmit={handleSubmit}>
          <input type="text" onChange={handleInput} value={input} />
        </form> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
