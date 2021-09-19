import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Cards } from './components/Cards';

function App() {
  const [score, setScore] = useState(0);
  const increaseScore = () => {
    setScore(score + 1);
  };
  return (
    <div className='App'>
      <Header score={score} />
      <Cards set={increaseScore} />
    </div>
  );
}

export default App;
