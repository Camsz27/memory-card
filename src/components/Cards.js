import React, { useState } from 'react';
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
import { Card } from './Card';

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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function unselect(array) {
  const ans = array.map((element) => (element.selected = false));
  return ans;
}

export const Cards = ({ set, setLost, lost }) => {
  if (lost) {
    unselect(characters);
  }
  shuffleArray(characters);
  const [chosen, setChosen] = useState(false);
  const changeSelected = (char) => {
    setChosen(!chosen);
    set();
  };
  return (
    <div className='cardContainer'>
      {characters.map((char) => (
        <Card
          char={char}
          selected={char.selected}
          onChange={changeSelected}
          lost={setLost}
          key={char.name}
        />
      ))}
    </div>
  );
};
