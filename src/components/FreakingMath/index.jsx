import React from 'react';
import './FreakingMath.scss'
import { useState } from 'react';

FreakingMath.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'violet', 'blue', 'tomato', 'orange', 'red']
    const randomIndex = Math.floor(Math.random() * COLOR_LIST.length)
    return COLOR_LIST[randomIndex]
}

function primaryNumber() {
    return Math.floor(Math.random() * 20)
}

function secondaryNumber() {
    return Math.floor(Math.random() * 20)
}

function FreakingMath(props) {
    const [color, setColor] = useState('white');
    const [primary, setPrimary] = useState(10)
    const [calculation, setCalculation] = useState('+')
    const [secondary, setSecondary] = useState(2)
    const [result, setResult] = useState(12)
    const [score, setScore] = useState(0)

    function randomQuestion() {
        changeBackgroundColor()

        changePrimaryNumber()
        changeSecondaryNumber()
        changeCalculation()
        changeResult()
    }

    function changeResult() {
        if (Math.random() < 0.5) {
            const newResult = eval(`${primary}${calculation}${secondary}`)
            setResult(newResult)
            return
        }
        const newResult = eval(`${primary}${calculation}${secondary} - ${Math.floor(Math.random() * 5)}`)
        setResult(newResult)
    }

    function changeBackgroundColor() {
        const newColor = getRandomColor()
        setColor(newColor)
    }
    function changeCalculation() {
        const calculation = ["+", "-", "*"]
        const newCalculation = calculation[Math.floor(Math.random() * calculation.length)]
        setCalculation(newCalculation)
    }
    function changePrimaryNumber() {
        const newPrimary = primaryNumber()
        setPrimary(newPrimary)
    }

    function changeSecondaryNumber() {
        const newSecondary = secondaryNumber()
        setSecondary(newSecondary)
    }

    function checkTrue() {
        const operation = eval(`${primary}${calculation}${secondary}`)
        if (operation !== result) {
            alert('Game Over!')
            return
        }
        setScore(score + 1)
        randomQuestion()
    }

    function checkFalse() {
        const operation = eval(`${primary}${calculation}${secondary}`)
        if (operation === result) {
            alert('Game Over')
            return
        }
        setScore(score + 1)
        randomQuestion()
    }

    return (
        <div id="container" style={{ backgroundColor: color }}>
            <div id="item">Score : <span className="score">{score}</span></div>
            <div id='main'>
                <div id="primary-number">{primary}</div>
                <div id="operator">{calculation}</div>
                <div id="secondary-number">{secondary}</div>
                <div id="equal">=</div>
                <div id='result'>{result}</div>
            </div>
            <div id='btn'>
                <button onClick={checkTrue}>true</button>
                <button onClick={checkFalse}>false</button>
            </div>

        </div>
    );
}

export default FreakingMath;