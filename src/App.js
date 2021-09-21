import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Cards } from './components/Cards';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lost, setLost] = useState(false);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const lostGame = () => {
    setLost(!lost);
  };

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    if (score === 10) {
      lostGame();
    }
  }, [score]);

  useEffect(() => {
    setScore(0);
    setLost(false);
    setBestScore(bestScore);
  }, [lost]);

  return (
    <div className='App'>
      <Header score={score} bestScore={bestScore} />
      <Cards set={increaseScore} setLost={lostGame} lost={lost} />
    </div>
  );
}

export default App;
