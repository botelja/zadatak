import React, { useState, useEffect } from 'react';

function ToggleColors(props) {
  const [color, setColor] = useState('');
  const [isBlack, setIsBlack] = useState(true);

  useEffect(() => {});
  const handleColor = () => {
    if (props.colors.length > 0) {
      let randomColor =
        props.colors[Math.floor(Math.random() * props.colors.length)].name;
      setColor(randomColor);
      setIsBlack(!isBlack);
    }
  };

  return (
    <div>
      <p
        style={isBlack ? { color: 'black' } : { color: `${color}` }}
        onClick={handleColor}
      >
        Hello
      </p>
    </div>
  );
}

export default ToggleColors;
