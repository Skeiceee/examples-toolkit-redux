import { useSelector, useDispatch } from "react-redux";
import {
  startLoadingPokemons,
  setPokemons,
} from "./store/slices/pokemon/pokemonSlice";
import { useEffect } from "react";
import { getPokemons } from "./store/slices/pokemon/thunks";

const PokemonApp = () => {
  const { pokemons, page, isLoading } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  }, []);

  return (
    <div>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: { isLoading ? 'True' : 'False' }</span>
      <ul>
        {
            pokemons.map(({ name }) => {
                return (
                    <li key={ name }>{ name }</li>
                )
            })
        }
      </ul>

      <button
        disabled={ isLoading }
        onClick={ () => dispatch( getPokemons(page + 1) )}
      >
        Next
      </button>
    </div>
  );
};

export default PokemonApp;
