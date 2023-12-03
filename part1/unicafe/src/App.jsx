import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    const newTotal = total + 1;
    setTotal(newTotal);
    setAverage((newGood - bad) / newTotal);
    setPositive((newGood * 100) / newTotal);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    const newTotal = total + 1;
    setTotal(newTotal);
    setPositive((good * 100) / newTotal);
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    const newTotal = total + 1;
    setTotal(newTotal);
    setAverage((good - newBad) / newTotal);
    setPositive((good * 100) / newTotal);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </div>
  );
};

export default App;
