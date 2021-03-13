import { combineReducers } from "redux"

import pokemon from './pokemons/pokemon.reducers';
import region from './region/region.reducers';
import session from './session/session.reducers';

const rootReducer = combineReducers({
    pokemon,
    region,
    session
});

export default rootReducer;