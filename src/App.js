import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pokelist from "./components/pokelist/Pokelist";
import Pokemon from "./components/pokemon/Pokemon";
import Searchbar from "./components/searchbar/Searchbar";
import Pokefavoritos from "./components/pokefavoritos/Pokefavoritos";
import PokedexContainer from "./components/pokedex/PokedexContainer";
import useTrigger from "./useTrigger";

function App() {
  // === CUSTOM HOOK ===
  let [updateToken, triggerUpdate] = useTrigger();

  // === STATES ===
  const [pokemonListState, setPokemonListState] = useState([]);
  // === USE EFFECT ===
  useEffect(() => {
    async function fetchPokemon() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokemonListState(response.data.results);
    }
    fetchPokemon();
  }, []);

  // === JSX ===
  return (
    <div className="App">
      <PokedexContainer />
      <Searchbar />
      <Pokelist pokeList={pokemonListState} />

      <Routes>
        <Route path="/" element={null} />
        <Route
          path="/pokemon/:PokeName"
          element={<Pokemon handleUpdateFavoritos={triggerUpdate} />}
        />
      </Routes>

      <Pokefavoritos updateFavoritos={updateToken} />
    </div>
  );
}

export default App;
