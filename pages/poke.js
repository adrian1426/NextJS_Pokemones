import { useState, useEffect } from 'react';
import Pokemon from "../components/Pokemon";

export default function Home() {
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      setPokemones(data.results);
      setLoading(false);
    }

    getPokemones();
  }, []);

  if (loading) {
    return <p>Cargando...</p>
  }

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