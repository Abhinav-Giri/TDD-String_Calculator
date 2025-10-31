import { useState } from 'react';
import { StringCalculator } from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  // const [result] = useState(null);
 const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const calculator = new StringCalculator();
  
  const handleCalculate = () => {
 try {
      setError(null);
      const sum = calculator.add(input);
      setResult(sum);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setResult(null);
      console.log('Error:', error)
    }
  };
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', color: '#aaa' }}>
      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={600}
        height={400}
        alt="Calculator background"
      />

      <h1>String Calculator</h1>

      <label htmlFor="numberInput" style={{ fontSize: '20px' }}>Enter numbers</label>

      <textarea
        id="numberInput"
        aria-describedby="inputHelp"
        style={{ margin: '10px 0', color: '#aaa' }}
        placeholder='Enter numbers'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div id="inputHelp" className="sr-only">
        Enter numbers separated by commas, or use custom delimiter with // prefix
      </div>
      <div
        aria-label="Calculate sum"
        role="button"
        onClick={handleCalculate}
        style={{
          padding: '10px',
          backgroundColor: '#008cba',
          color: '#fff',
          border: 'none',
        }}>
        Calculate
      </div>

      {result !== null && !Number.isNaN(result) ? <p style={{ color: 'green' }}>Result: {result}</p>
      :

      <div role="alert" aria-live="polite">
        <p>Make sure you enter numbers correctly!</p>
      </div> }
    </div>
  );
};

export default App;
