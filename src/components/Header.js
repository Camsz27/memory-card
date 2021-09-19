import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.svg';

export const Header = ({ score }) => {
  return (
    <div className='header'>
      <img src={logo} alt='Marvel logo' />
      <div className='scoreboard'>
        <h3>Score: {score}</h3>
        <h3>Best Score: 0</h3>
      </div>
    </div>
  );
};
