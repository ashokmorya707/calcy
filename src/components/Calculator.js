import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import { evaluate } from 'mathjs';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [memory, setMemory] = useState(null);

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        setInput(evaluate(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (label === 'C') {
      setInput('');
    } else if (label === 'MC') {
      setMemory(null);
    } else if (label === 'MR') {
      if (memory !== null) setInput(input + memory);
    } else if (label === 'M+') {
      try {
        setMemory(evaluate(input));
      } catch {
        setInput('Error');
      }
    } else if (label === 'M-') {
      setMemory(null);
    } else if (['sin', 'cos', 'tan', 'log', 'sqrt', 'ln'].includes(label)) {
      setInput(`${label}(${input})`);
    } else if (label === 'π') {
      setInput(input + Math.PI.toString());
    } else {
      setInput(input + label);
    }
  };

  const buttons = [
    '(', ')', 'MC', 'M+', 'M-', 'MR', 'C', '+/-', '%', '÷',
    '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '×',
    '1/x', '√x', '∛x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-',
    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '='
  ];

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {buttons.map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
