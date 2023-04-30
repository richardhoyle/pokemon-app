import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import Header from "./Header";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import "./styles.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState('ditto');
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    setIsLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setIsLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setPokemonList(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`)
      .then((response) => {
        if (response.status === 200) {
          setPokemonData(response.data);
        } else {
          console.log("Error getting image:", response.status);
        }
      });
    return () => {};
  }, [currentPokemon]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPreviousPage() {
    setCurrentPageUrl(previousPageUrl);
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <p>"Loading new Pokémon...Hold Tight!"</p>
        <PokemonList pokemonList={pokemonList} />
      </>
    );
  }

  return (
    <>
      <Header />
      <PokemonList
        pokemonList={pokemonList}
        setCurrentPokemon={setCurrentPokemon}
      />
      <PokemonCard pokemonData={pokemonData} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
      />
    </>
  );
}

export default App;
