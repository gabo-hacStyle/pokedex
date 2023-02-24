import { combineReducers } from "redux-immutable";
import { numbersReducer } from "./number";
import { pokemonsReducer } from "./pokemons";
import { uiReducer } from "./ui";

export const reducers = combineReducers({
    count: numbersReducer,
    data: pokemonsReducer,
    ui: uiReducer
})