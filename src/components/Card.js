import React from 'react';

export const Card = ({ char, selected, onChange, lost }) => {
  const onClick = () => {
    if (selected) {
      lost();
    }
    char.selected = true;
    onChange(char);
  };
  return (
    <div className='card' onClick={onClick}>
      <img src={char.src} alt={char.name} />
      <h2>{char.name}</h2>
    </div>
  );
};
