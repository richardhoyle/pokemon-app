const PokemonCard = ({ pokemonData }) => {
  console.log(pokemonData, "<<<<pokedata");
  return (
    <div className="card">
      <h2 className="card-name">{pokemonData?.name}</h2>
      <img
        className="card.image"
        src={pokemonData?.sprites?.front_default}
        alt={pokemonData?.name}
      />
      <div className="card-hp">
        HP: {pokemonData.stats && pokemonData.stats[0].base_stat}
      </div>
      <div className="card-weight">Weight: {pokemonData.weight}</div>
      <div className="card-height">Height: {pokemonData.height}</div>
      {pokemonData.description && (
        <div className="card-description">
          Description: {pokemonData.description}
        </div>
      )}
      <div className="card-attack">
        Attack: {pokemonData.stats && pokemonData.stats[1].base_stat}
      </div>
      <div className="card-defense">
        Defense: {pokemonData.stats && pokemonData.stats[2].base_stat}
      </div>
      <div className="card-special-attack">
        Special Attack: {pokemonData.stats && pokemonData.stats[3].base_stat}
      </div>
      <div className="card-special-defense">
        Special Defense: {pokemonData.stats && pokemonData.stats[4].base_stat}
      </div>
      <div className="card-speed">
        Speed: {pokemonData.stats && pokemonData.stats[5].base_stat}
      </div>
  
    </div>
  );
};

export default PokemonCard;

// 0.5 get this showPokemonImage warning gone
// 1. get rid of the loading screen
// 1.5 try and get the rquest stuff into a separate component
// 2. get another stat
// 2.5. put pic and another stat thing as children to a parent element.
