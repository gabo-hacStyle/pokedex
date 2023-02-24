import { LESS_NUMBERS, SET_NUMBERS } from "../actions/types";

const initialState = {
    numbers: 0,
};

export const numbersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_NUMBERS:
            return {numbers: action.payload}
        case LESS_NUMBERS:
            return {numbers: action.payload}
        default: 
        return state;
    }
}
