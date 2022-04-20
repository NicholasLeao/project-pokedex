import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./components/pokedex/Pokedex.css"
import Pokelist from "./components/pokelist/Pokelist";
import Pokemon from "./components/pokemon/Pokemon";
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
      <div className="all">
        <div className="logo">
        <header>
        <img src= "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-3-1.png" alt= "logo"/>
        </header>
        </div>

        <div className = 'corpo'>
          <div className="lista">
          <Pokelist pokeList={pokemonListState} />
          </div>
          <div id="pokedex" className="pokedex">
            {/* <!-- Left Panel --> */}
            <div id="left-panel">
              {/* <!-- Top lights --> */}
              <div className="left-top-container">
                <div className="lights-container">
                  <div className="big-light-boarder">
                    <div className="big-light blue">
                      <div className="big-dot light-blue"></div>
                    </div>
                  </div>
                  <div className="small-lights-container">
                    <div className="small-light red">
                      <div className="dot light-red"></div>
                    </div>
                    <div className="small-light yellow">
                      <div className="dot light-yellow"></div>
                    </div>
                    <div className="small-light green">
                      <div className="dot light-green"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="screen-container">
                <div class="screen">
                  <div class="top-screen-lights">
                    <div class="mini-light red"></div>
                    <div class="mini-light red"></div>
                  </div>
                  <div id="main-screen" className="butF">
                    <Routes>
                    <Route path="/" element={null} />
                    <Route
                      path="/pokemon/:PokeName"
                      element={<Pokemon handleUpdateFavoritos={handleUpdateFavoritos} />}
                    />
                    </Routes>
                  </div>
                  <div class="bottom-screen-lights">
                  <div class="">
                    <div class=""></div>
                  </div>
              </div>
            </div>
          </div>
              <div className="buttons-container">
                <div className="upper-buttons-container"></div>
              </div>
            </div>
    
            <div id="right-panel">
              {/* <!-- Blank container --> */}
              <div className="empty-container">
                <svg height="100%" width="100%">
                  <polyline
                    points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
                    style={{ fill: "#f2f2f2", stroke: "none", strokeWidth: "3px" }}
                  />
                  <polyline
                    points="0,40 138,40 158,75 250,75"
                    style={{ fill: "none", stroke: " black", strokeWidth: "3px" }}
                  />
                </svg>
              </div>
              <div className="butf">
                <Pokefavoritos updateFavoritos={updateFavoritos} />
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
