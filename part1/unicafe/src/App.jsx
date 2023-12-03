import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good * 100) / total;

  return (
    <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      {good || neutral || bad ? (
        <>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </>
      ) : (
        <div>No feedback given</div>
      )}
    </div>
  );
};

export default App;
