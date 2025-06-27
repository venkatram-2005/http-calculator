import { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculate = async () => {
    try {
      setError('');
      const response = await axios.post(`https://http-calculator.onrender.com/calculator/${operation}`, {
        a,
        b
      });
      setResult(response.data.result);
    } catch (err) {
      setResult(null);
      console.error(err); // NEW: log full error
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="calculator-container">
      <h2>HTTP Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add (+)</option>
        <option value="subtract">Subtract (-)</option>
        <option value="multiply">Multiply (×)</option>
        <option value="divide">Divide (÷)</option>
      </select>
      <button onClick={calculate}>Calculate</button>
      {result !== null && <div className="result">Result: {result}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Calculator;
