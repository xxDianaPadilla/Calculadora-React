import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado(resta);
    };

    const handleMultiplicar = () => {
        const multiplicar = parseFloat(num1) * parseFloat(num2);
        setResultado(multiplicar);
    };

    const handleDividir = () => {
        const dividir = parseFloat(num1) / parseFloat(num2);
        setResultado(dividir);
    };

    const limpiarCampos = () =>{
        setNum1("");
        setNum2("");
    }

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <div id='buttons'>
               <button onClick={handleSumar}>Sumar</button>
               <button id='btnRestar' onClick={handleRestar}>Restar</button>
               <button id='btnMultiplicar' onClick={handleMultiplicar}>Multiplicar</button>
               <button id='btnDividir' onClick={handleDividir}>Dividir</button>
               <button id='btnLimpiar' onClick={limpiarCampos}>Limpiar</button>
            </div>
            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    );
};

export default Calculadora;