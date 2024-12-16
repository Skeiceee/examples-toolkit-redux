import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() )

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10}`);

        dispatch( setPokemons({
            page: page,
            pokemons: data.results
        }) );
    }
}