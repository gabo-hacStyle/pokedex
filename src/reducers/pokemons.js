import { SET_POKEMONS, SET_FAVORITE } from "../actions/types";

const initialState = {
    pokemons: [],
    favorite: false,
};

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_POKEMONS:
            return {...state, pokemons: action.payload}
        case SET_FAVORITE:
            const newPokemonsList = [...state.pokemons]
            const currentPokemonIndex = newPokemonsList.findIndex(
                (pokemon) => { return pokemon.id === action.payload.pokemonId }
            )
            if (currentPokemonIndex < 0) {
                return state;
            }
            newPokemonsList[currentPokemonIndex].favorite = 
            ! newPokemonsList[currentPokemonIndex].favorite;
            return {...state, pokemons: newPokemonsList}
    default: 
        return state;
    }
}