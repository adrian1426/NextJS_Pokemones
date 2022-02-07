import Pokemon from "../components/Pokemon";

export default function Home(props) {
  const { pokemones } = props;

  return (
    <div>
      <h1 data-testid='titulo-id'>Pokemones</h1>
      <ul>
        {
          pokemones.map(pokemon => (
            <Pokemon
              key={pokemon.name}
              pokemon={pokemon}
            />
          ))
        }
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();

  return {
    props: {
      pokemones: data.results
    }
  };
};
