import React, {useState, useEffect} from 'react'

function ToggleColors({defaultColor, changeColor, text}) {

    const[randomColor, setRandomColor] = useState(defaultColor);
    const[info, setInfo] = useState(`Edit <code>src/App.js</code> and save to reload.`)

    useEffect(() => {
        document.body.style.color = randomColor;
    })


    const handleColor = () => {
        defaultColor = setRandomColor(changeColor[Math.floor(Math.random() * changeColor.length)]);
    };

    const handleText = () => {
        setInfo(text);
    }

    
    return (
        <div>
            <p style={{color: defaultColor}} onClick={handleColor} onChange={handleText}> 
                {info}
            </p> 
           
        </div>
    )
}

export default ToggleColors;
