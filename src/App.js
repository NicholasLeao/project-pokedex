import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Pokelist from "./components/pokelist/Pokelist";
import Pokemon from "./components/pokemon/Pokemon";
import Searchbar from "./components/searchbar/Searchbar";

function App() {
  // === STATES ===
  const [pokemonListState, setPokemonListState] = useState([]);
  // === USE EFFECT ===
  useEffect(() => {
    setLoadListState(true);
    async function fetchPokemon() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokemonListState(response.data.results);
      setLoadListState(false);
    }
    fetchPokemon();
  }, []);

  // === JSX ===
  return (
    <div className="App">
      <Searchbar />
      <Pokelist />
      <Routes>
        {/* <Route path="/" element={null} />
        <Route path="/:PokeNumber" element={<Pokemon />} /> */}
      </Routes>
    </div>
  );
}

export default App;
