import React, { useState } from 'react';
import './Teste.css';

import iconPlay from './img/play.png'

export default function Teste() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const [response, setResponse] = useState('');
    // Resposta do usuário

    const [started, setStarted] = useState(false);
    // Controlar se o jogo já começou

    const [changeClassName, setChangeClassName] = useState(true)

    console.log(changeClassName);

    const result = number1 * number2;

    console.log(number1, number2, result, response);

    function sortNumbers() {
        setNumber1(Math.floor(Math.random() * 10) + 1);
        setNumber2(Math.floor(Math.random() * 10) + 1);
    }

    // Math.floor vai me gerar um número entre 0 e 9.
    // Somando + 1 a esse resultado eu impeço que o resultado seja 0.
    // Pois se o número for 0 vai ser somado a mais + 1 de qualquer jeito.

    function handleStart() {
        sortNumbers();
        setStarted(true);
        setResponse('');
    }

    function checkResponse(e) {
        e.preventDefault();

        if (response === result) {
            sortNumbers()
            setResponse('')
            setChangeClassName(true)
        } else {
            setResponse('')
            setChangeClassName(false)
        }
    }

    return (
        <div className="container">

            {started ? (
                <div className="game-container">

                    <div className="question">
                        <p>{number1}</p>
                        <p>*</p>
                        <p>{number2}</p>
                    </div>

                    <form onSubmit={checkResponse}>
                        <input
                            value={response}
                            onChange={(e) => setResponse(parseInt(e.target.value))}
                            type="number"

                            className={
                                changeClassName ? "input-correct" : "input-uncorrect"
                            }

                        />
                    </form>
                </div>
            ) : (
                <button onClick={handleStart}>
                    <img src={iconPlay} alt="icon-play" />
                </button>
            )}
        </div>
    );
}
