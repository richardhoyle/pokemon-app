import { useState } from "react";
import PokemonList from "./PokemonList";

function App() {
const [Pokemon, setPokemon] = useState(['bulbasaur', 'charmander'])

  return (
    <PokemonList pokemon={Pokemon} />
  );
}

export default App;

// 
