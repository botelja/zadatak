import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import ToggleColors from './components/ToggleColors';
import './App.css';

function App() {

  const [color, setColor] = useState('black');
  const [randomColor, setRandomColor] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getColors();
  }, []);

  const getColors = async () => {
    const response = await fetch('http://www.colr.org/json/color/random');
    const data = await response.json();
    setRandomColor(data.colors[0].tags.map(color => color.name));
  }

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToggleColors defaultColor={color} 
                      changeColor={randomColor}
                      text={input}
        />
        <input type="text" onChange={handleInput} value={input} />
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
