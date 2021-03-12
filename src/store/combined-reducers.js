import { combineReducers } from "redux"

import pokemon from './pokemons/pokemon.reducers';

const rootReducer = combineReducers({
    pokemon
});

export default rootReducer;