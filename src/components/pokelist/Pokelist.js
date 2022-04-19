import { Link } from "react-router-dom";
import styles from "./Pokelist.module.css";

function Pokelist(props) {
  return (
    <>
      <ul className={styles.pokelist}>
        {props.pokeList.map((currentPokemon, idx) => {
          return (
            <li key={`${currentPokemon.name}`}>
              <Link to={`/pokemon/${currentPokemon.name}`}>
                <button>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      idx + 1
                    }.png`}
                  ></img>
                  <strong>{currentPokemon.name}</strong>
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Pokelist;
