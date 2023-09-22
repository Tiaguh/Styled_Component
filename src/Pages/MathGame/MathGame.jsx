import React, { useState, useEffect } from 'react';
import './MathGame.css';

import iconPlay from './img/play.png';

import { AiFillClockCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { BsArrowRepeat } from 'react-icons/bs'

export default function Teste() {
    const [started, setStarted] = useState(false);
    // Controlar se o jogo já começou.

    const [countdown, setCountdown] = useState('');
    // Controla o tempo das partidas.

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    // Números sorteados.

    const result = number1 * number2;
    // Resposta da multiplicação dos números sorteados.

    const [response, setResponse] = useState('');
    // Resposta do usuário.

    const [isInputDisabled, setIsInputDisabled] = useState(false);

    const [changeClassName, setChangeClassName] = useState(true);
    // Muda a classe do input. 
    // Fiz isso para ativar a animação caso a resposta esteja errada.

    const [score, setScore] = useState(0)

    useEffect(() => {
        if (started) {
            const countdownInterval = setInterval(() => {
                if (countdown > 0) {
                    setCountdown(countdown - 1);
                } else {
                    clearInterval(countdownInterval);
                    // setStarted(false);
                    setIsInputDisabled(true)
                }
            }, 1000);
            return () => clearInterval(countdownInterval);
        }
    }, [started, countdown]);

    function sortNumbers() {
        setNumber1(Math.floor(Math.random() * 10) + 1);
        setNumber2(Math.floor(Math.random() * 10) + 1);
    }
    // Sorteio dos números.

    function handleStart() {
        setStarted(true);
        sortNumbers();
        setResponse('');
        setCountdown(30)
        setIsInputDisabled(false)
    }

    function checkResponse(e) {
        e.preventDefault();

        if (response === result) {
            sortNumbers();
            setResponse('');
            setChangeClassName(true);
            setScore(score + 1);
        } else {
            setResponse('');
            setChangeClassName(false);

            if (score > 0) {
                setScore(score - 1);
            } else {
                setScore(score + 0);
            }
        }
    }

    return (
        <div>

            {started ? (
                <div className="game-container">

                    <header>

                        <div className='countdown'>
                            <h1>{countdown}</h1>
                            <AiFillClockCircle size={28} color="#F5CB5C" />
                        </div>

                        <div className="score-container">
                            <h2>Score: </h2>
                            <h1>{score}</h1>
                        </div>

                    </header>

                    <div className="content">

                        <div className="question">
                            <p>{number1}</p>
                            <IoClose size={30} color="#F5CB5C" />
                            <p>{number2}</p>
                        </div>

                        <form onSubmit={checkResponse}>

                            <input
                                value={response}
                                onChange={(e) => setResponse(parseInt(e.target.value))}
                                type="number"
                                className={changeClassName ? 'input-correct' : 'input-uncorrect'}
                                disabled={isInputDisabled}
                            />

                        </form>

                        <button onClick={handleStart}>
                            <BsArrowRepeat size={60} color="#F5CB5C" />
                        </button>

                    </div>

                    {countdown === 0 ? (
                        <div className="time-is-over-container">
                            <p>Tempo esgotado!</p>
                        </div>
                    ) : (
                        <div className="time-is-over-container" />
                    )}

                </div>
            ) : (
                <div className="start-button-container">
                    <button className="start-button" onClick={handleStart}>
                        <img src={iconPlay} alt="icon-play" />
                    </button>

                    <div className="select-game-mode">

                        {/* <h1>SELECT GAME MODE</h1>

                        <div className='button-container'>

                            <button>
                                <h1>Fast</h1>
                            </button>

                            <button>
                                <h1>Normal</h1>
                            </button>

                            <button>
                                <h1>Long</h1>
                            </button>

                        </div> */}

                    </div>

                </div>
            )}
        </div>
    );
}
