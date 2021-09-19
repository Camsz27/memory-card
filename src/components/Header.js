import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.svg';

export const Header = ({ score, bestScore }) => {
  return (
    <div className='header'>
      <img src={logo} alt='Marvel logo' />
      <div className='scoreboard'>
        <h3>Score: {score}</h3>
        <h3>Best Score: {bestScore}</h3>
      </div>
    </div>
  );
};
