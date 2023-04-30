export default function PokemonList({ pokemonList, setCurrentPokemon }) {
  return (
    <div className="PokemonList">
      {pokemonList.map((p) => (
        <div
          key={p}
          className="Pokemon"
          onClick={() => {
            setCurrentPokemon(p)
            console.log("You clicked on " + p);
          }}
        >{p}</div>
      ))}
    </div>
  );
}
