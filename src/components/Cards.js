import React from 'react';
import '../styles/Cards.css';
import ultron from '../assets/ultron.jpeg';

export const Cards = () => {
  return (
    <div className='cardContainer'>
      <div className='cube'>
        <img src={ultron} alt='Ultron' />
        <h2>ULTRON</h2>
      </div>
      <div className='cube red'>
        <img src={ultron} alt='Ultron' />
        <h2>ULTRON</h2>
      </div>
      <div className='cube'>
        <img src={ultron} alt='Ultron' />
        <h2>ULTRON</h2>
      </div>
      <div className='cube'>
        <img src={ultron} alt='Ultron' />
        <h2>ULTRON</h2>
      </div>
      <div className='cube red'>
        <img src={ultron} alt='Ultron' />
        <h2>ULTRON</h2>
      </div>
      <div className='cube'>
        <img src={ultron} alt='Ultron' />
        <h2>ULTRON</h2>
      </div>
      <div className='cube'>
        <img src={ultron} alt='Ultron' />
        <h2>ULTRON</h2>
      </div>
      <div className='cube'>
        <img src={ultron} alt='Ultron' />
        <h2>ULTRON</h2>
      </div>
      <div className='cube'>
        <img src={ultron} alt='Ultron' />
        <h2>ULTRON</h2>
      </div>
      <div className='cube'>
        <img src={ultron} alt='Ultron' />
        <h2>ULTRON</h2>
      </div>
    </div>
  );
};
