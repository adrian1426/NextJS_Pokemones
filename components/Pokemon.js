import Link from 'next/link';

const Pokemon = props => {
  const { pokemon } = props;
  const idPokemon = pokemon.url.split('/').filter(x => x).pop();

  return (
    <li data-testid={idPokemon}>
      <Link
        href={`/pokemones/${idPokemon}`}
      >
        {pokemon.name}
      </Link>
    </li>
  );
};

export default Pokemon;