import { useEffect, useState } from "react";
import axios from "axios";

function Pokefavoritos(props) {
  // === STATE ===
  const [favoritos, setFavoritos] = useState([]);
  let pokemonOnScreen = [];

  // === GET FAVORITOS ===
  const fetchFavoritos = async () => {
    const response = await axios.get("https://ironrest.herokuapp.com/pokefav");
    setFavoritos(response.data);
  };

  useEffect(() => {
    fetchFavoritos();
  }, [props.updateFavoritos]);

  // === CLICK HANDLER DELETAR ===
  async function handleClickDeletar(e) {
    const requests = [];
    const name = e.target.name;
    for (let pokemon of favoritos) {
      if (pokemon.name === name) {
        requests.push(
          axios.delete(
            `https://ironrest.herokuapp.com/deleteOne/pokefav?name=${name}`,
            
          )
        );
      }
    }
    await Promise.all(requests);
    fetchFavoritos();
  }

  return (
    <>
      <div>
        <h2>FAVORITOS</h2>
        <ul>
          {favoritos.map((pokemonObject) => {
            // === FILTRO DE POKEMON ===
            if (pokemonOnScreen.includes(pokemonObject.name)) {
              return;
            } else {
              pokemonOnScreen.push(pokemonObject.name);
            }
            // === RETURN DO MAP ===
            return (
              <li key={pokemonObject.name + String(Math.random())}>
                <p>
                  <button
                    name={pokemonObject.name}
                    onClick={handleClickDeletar}
                  >
                    💀
                  </button>
                  {pokemonObject.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Pokefavoritos;
