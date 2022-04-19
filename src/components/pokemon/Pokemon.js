import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Pokemon.modules.css";
import axios from "axios";

function Pokemon() {
  const [pokeData, setPokeData] = useState({});
  const pokeName = useParams().PokeName;

  useEffect(() => {
    async function fetchPokemon() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );
      setPokeData(response.data);
      console.log(response.data);
    }
    fetchPokemon();
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
      <ul>
        <li>POKEVOLUCAO</li>
        <li>POKEVOLUCAO</li>
        <li>POKEVOLUCAO</li>
      </ul>
    </div>
  );
}

export default Pokemon;
