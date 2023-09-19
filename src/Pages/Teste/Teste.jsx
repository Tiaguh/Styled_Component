import React, { useState } from 'react';
import "./Teste.css";

export default function Teste() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const [response, setResponse] = useState("");

    const [round, setRound] = useState(1)
    
    const result = number1 * number2;

    console.log(number1, number2);
    console.log(response);

    function sort() {
        setNumber1(parseInt(Math.random() * 11));
        setNumber2(parseInt(Math.random() * 11));
    }

    function checkResponse(e) {
        e.preventDefault();

        console.log(result);

        if (parseInt(response) === result) {
            alert("Correto!");
        } else {
            alert("Errado!");
        }

        setRound(round + 1)
    }

    return (
        <div className="container">

            <p> Rodada {round}</p>
            
            <div className="ask">
                <p>{number1}</p>
                <p>.</p>
                <p>{number2}</p>
            </div>

            <input onChange={(e) => setResponse(e.target.value)} type="number" />
            <button onClick={sort}>Sort</button>
            <button onClick={checkResponse}>Check</button>
        </div>
    );
}
