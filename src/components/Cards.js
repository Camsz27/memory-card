import React from 'react';
import '../styles/Cards.css';
import ultron from '../assets/ultron.jpeg';
import blackPanther from '../assets/blackPanther.jpeg';
import groot from '../assets/groot.jpeg';
import wanda from '../assets/wandaMaximoff.jpeg';
import thanos from '../assets/thanos.jpeg';
import ironMan from '../assets/ironMan.jpeg';
import rocket from '../assets/rocket.jpeg';
import captainAmerica from '../assets/captainAmerica.jpeg';
import thor from '../assets/thor.jpeg';
import spiderMan from '../assets/spiderMan.jpeg';

export const Cards = ({ set }) => {
  const ultronChar = { name: 'Ultron', src: ultron, selected: false };
  const blackPantherChar = {
    name: 'Black Panther',
    src: blackPanther,
    selected: false,
  };
  const grootChar = { name: 'Groot', src: groot, selected: false };
  const wandaChar = { name: 'Wanda Maximoff', src: wanda, selected: false };
  const thanosChar = { name: 'Thanos', src: thanos, selected: false };
  const ironManChar = { name: 'Iron Man', src: ironMan, selected: false };
  const rocketChar = { name: 'Rocket', src: rocket, selected: false };
  const captainAmericaChar = {
    name: 'Captain America',
    src: captainAmerica,
    selected: false,
  };
  const thorChar = { name: 'Thor', src: thor, selected: false };
  const spiderManChar = { name: 'Spider-Man', src: spiderMan, selected: false };
  const characters = [
    ultronChar,
    blackPantherChar,
    grootChar,
    wandaChar,
    thanosChar,
    ironManChar,
    rocketChar,
    captainAmericaChar,
    thorChar,
    spiderManChar,
  ];
  const trial = () => {
    console.log('here');
    set();
    console.log(set);
  };
  return (
    <div className='cardContainer'>
      {characters.map((char) => (
        <div className='card' onClick={set}>
          <img src={char.src} alt={char.name} />
          <h2>{char.name}</h2>
        </div>
      ))}
    </div>
  );
};
