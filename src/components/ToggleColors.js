import React, { useState } from 'react';

function ToggleColors(props) {
  const [color, setColor] = useState('');
  const [isBlack, setIsBlack] = useState(true);

  const handleColor = () => {
    if (props.colors.length > 0) {
      let randomColor =
        props.colors[Math.floor(Math.random() * props.colors.length)].name;
      setColor(randomColor);
      setIsBlack(!isBlack);
    }
  };

  const text = 'Hello';

  return (
    <div>
      <p
        style={isBlack ? { color: 'black' } : { color: `${color}` }}
        onClick={handleColor}
      >
        {props.text ? props.text : text}
      </p>
    </div>
  );
}

export default ToggleColors;
