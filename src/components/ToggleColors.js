import React, { useState } from 'react';

function ToggleColors({colors, inputText}) {
  const [color, setColor] = useState('');
  const [isBlack, setIsBlack] = useState(true);
  const [text, setText] = useState('Hello');

  const handleColor = () => {
    if (colors.length > 0) {
      let randomColor =
        colors[Math.floor(Math.random() * colors.length)].name;
      setColor(randomColor);
      setIsBlack(!isBlack);
    }
  };

  const handleText = () => {
    setText(inputText);
  }

  return (
    <div onLoad={handleText}>
      <p
        style={{color: isBlack ? 'black' : `${color}`}}
        onClick={handleColor}
      >
        { inputText ? inputText : text }
      </p>
    </div>
  );
}

export default ToggleColors;
