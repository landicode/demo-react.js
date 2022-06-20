import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss'

ColorBox.propTypes = {
    
};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue', 'tomato', 'orange', 'red']
    const randomIndex = Math.floor(Math.random() * COLOR_LIST.length)
    return COLOR_LIST[randomIndex]
}

function ColorBox(props) {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'red';
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor()
        setColor(newColor)
        localStorage.setItem('box_color', newColor)
    }

    return (
        <div
            className='color-box'
            style= {{backgroundColor: color}}
            onClick={handleBoxClick}
        >

        </div>
    );
}

export default ColorBox;