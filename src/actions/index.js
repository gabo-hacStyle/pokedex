import { getPokemonDetails } from "../api";
import { 
    SET_NUMBERS, 
    SET_POKEMONS,
    LESS_NUMBERS,
    SET_LOADING,
    SET_FAVORITE
} from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
})
export const getPokemonsWithDetails = (
    pokemons = []) => 
    async (dispatch) => {
        const detailedPokemons = await Promise.all(
            pokemons.map((pokemon) => getPokemonDetails(pokemon))
          );
        dispatch(setPokemons(detailedPokemons))
}

export const setNumbers = (payload) => ({
    type: SET_NUMBERS,
    payload
})

export const lessNumbers = (payload) => ({
    type: LESS_NUMBERS,
    payload
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})

export const setFavorite = (payload) => ({
    type: SET_FAVORITE, 
    payload
})
