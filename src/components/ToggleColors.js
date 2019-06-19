import React, { useState } from 'react';

function ToggleColors({colors, inputText}) {
  const [color, setColor] = useState('');
  const [isBlack, setIsBlack] = useState(true);
  

  const handleColor = () => {
    if (colors.length > 0) {
      let randomColor =
        colors[Math.floor(Math.random() * colors.length)].name;
      setColor(randomColor);
      setIsBlack(!isBlack);
    }
  };

  return (
    <div>
      <p
        style={{color: isBlack ? 'black' : `${color}`}}
        onClick={handleColor}
      >
        { inputText ? inputText : 'Hello' }
      </p>
    </div>
  );
}

export default ToggleColors;
