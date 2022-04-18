import { useParams, Link } from "react-router-dom";
import styles from "./Pokemon.modules.css"

function Pokemon() {
  return (
    <div className={styles.pokemon}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="POKEFOTO"
      />
      <p>
        POKENOME<span>POKENUMERO</span>
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
