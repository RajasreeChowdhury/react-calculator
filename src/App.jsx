import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentOperation, setCurrentOperation] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [isFirstValue, setIsFirstValue] = useState(false);
  const [sign, setSign] = useState('');
  const [resultValue, setResultValue] = useState(0);

  const handleNumberClick = (value) => {
    if (!isFirstValue) {
      setFirstValue(firstValue + value);
      setCurrentOperation(firstValue + value);
    } else {
      setSecondValue(secondValue + value);
      setCurrentOperation(`${firstValue} ${sign} ${secondValue + value}`);
    }
  };

  const handleSignClick = (value) => {
    setSign(value);
    setIsFirstValue(true);
    setCurrentOperation(`${firstValue} ${value}`);
  };

  const calculateResult = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    let result;
    switch (sign) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'x':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          alert('Cannot divide by zero');
          return;
        }
        result = num1 / num2;
        break;
      case '^':
        result = Math.pow(num1, num2);
        break;
      default:
        return;
    }

    result = parseFloat(result.toFixed(8));
    setResultValue(result);
    setCurrentOperation(result.toString());
    setFirstValue(result.toString());
    setSecondValue('');
    setSign('');
    setIsFirstValue(false);
  };

  const handleClear = () => {
    setCurrentOperation('0');
    setFirstValue('');
    setSecondValue('');
    setSign('');
    setResultValue(0);
    setIsFirstValue(false);
  };

  const handleNegative = () => {
    if (firstValue !== '') {
      const newValue = (-parseFloat(firstValue)).toString();
      setFirstValue(newValue);
      setCurrentOperation(newValue);
    }
  };

  const handlePercent = () => {
    if (firstValue !== '') {
      const newValue = (parseFloat(firstValue) / 100).toString();
      setFirstValue(newValue);
      setCurrentOperation(newValue);
    }
  };

  const handleSqrt = () => {
    if (firstValue !== '') {
      const newValue = Math.sqrt(parseFloat(firstValue)).toString();
      setFirstValue(newValue);
      setCurrentOperation(newValue);
    }
  };

  return (
    <div className="app">
      <div className="result">
        <span>{currentOperation || '0'}</span>
      </div>
      <div className="buttons">
        <button className="item clear" onClick={handleClear}>
          AC
        </button>
        <button className="item negative" onClick={handleNegative}>
          +/-
        </button>
        <button className="item percent" onClick={handlePercent}>
          %
        </button>
        <button className="item sign" onClick={() => handleSignClick('/')}>
          /
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('7')}>
          7
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('8')}>
          8
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('9')}>
          9
        </button>
        <button className="item sign" onClick={() => handleSignClick('x')}>
          x
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('4')}>
          4
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('5')}>
          5
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('6')}>
          6
        </button>
        <button className="item sign" onClick={() => handleSignClick('-')}>
          -
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('1')}>
          1
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('2')}>
          2
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('3')}>
          3
        </button>
        <button className="item sign" onClick={() => handleSignClick('+')}>
          +
        </button>
        <button
          className="item itemZero numbers"
          onClick={() => handleNumberClick('0')}
        >
          0
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('.')}>
          .
        </button>
        <button className="item equals" onClick={calculateResult}>
          =
        </button>
        <button className="item sqrt" onClick={handleSqrt}>
          √
        </button>
        <button className="item power" onClick={() => handleSignClick('^')}>
          ^
        </button>
      </div>
    </div>
  );
}

export default App;
