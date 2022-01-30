import React from 'react';

const Pokemon = props => {
  const { pokemon } = props;

  return (
    <li>{pokemon.name}</li>
  );
};

export default Pokemon;