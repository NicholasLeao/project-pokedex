import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Pokemon.modules.css";
import axios from "axios";

function Pokemon(props) {
  const [pokeData, setPokeData] = useState({});
  const [evoChain, setEvoChain] = useState([]);
  const pokeName = useParams().PokeName;

  // === CLICK HANDLER FAVORITOS ===
  async function clickHandlerFavoritos(e) {
    e.preventDefault();
    await axios.post("https://ironrest.herokuapp.com/pokefav", {
      name: pokeData.name,
      id: pokeData.id,
    });
    props.handleUpdateFavoritos();
  }

  // === GET POKEMON DATA ===
  useEffect(() => {
    async function fetchPokemon() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );
      setPokeData(response.data);
    }
    fetchPokemon();
  }, [pokeName]);

  // === GET EVO CHAIN ===
  useEffect(() => {
    async function fetchPokemonEvoChain() {
      // GET POKEMON
      const responsePokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );
      // GET SPECIES
      const responseSpecies = await axios.get(
        `${responsePokemon.data.species.url}`
      );
      // GET EVOLUTION CHAIN
      const responseEvolutionChain = await axios.get(
        `${responseSpecies.data.evolution_chain.url}`
      );

      // DEFINIR ARRAY PARA GUARDAR EVO CHAIN E OBJETO EVO CHAIN
      const evoChain = [];
      let evoData = responseEvolutionChain.data.chain;
      // LOGICA PARA PEGAR STRING DOS NOMES
      do {
        evoChain.push(evoData.species.name);
        evoData = evoData["evolves_to"][0];
      } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

      setEvoChain(evoChain);
    }
    fetchPokemonEvoChain();
  }, [pokeName]);

  // === JSX ===
  return (
    <div className={styles.pokemon}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`}
        alt="POKEFOTO"
      />
      <p>
        {pokeData.name}
        <span>{pokeData.id}</span>
      </p>
      <button onClick={clickHandlerFavoritos}>💝</button>
      <ul>
        {evoChain.map((pokemon) => {
          return (
            <li key={pokemon}>
              <Link to={`/pokemon/${pokemon}`}>{pokemon}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pokemon;
