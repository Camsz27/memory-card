import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Cards } from './components/Cards';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const increaseScore = () => {
    setScore(score + 1);
    if (score >= bestScore) {
      setBestScore(score + 1);
    }
  };

  return (
    <div className='App'>
      <Header score={score} bestScore={bestScore} />
      <Cards set={increaseScore} />
    </div>
  );
}

export default App;
