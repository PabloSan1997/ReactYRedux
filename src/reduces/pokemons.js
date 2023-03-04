import { fromJS, get, getIn, setIn } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initiallState = fromJS({
  pokemons: [],
  loading: true,
});
const pokemonReducer = (state = initiallState, actions) => {
  switch (actions.type) {
    case SET_POKEMONS:
     // action.action.payload, porque uso un midleware q modifica el listado
      return setIn(state, ['pokemons'], fromJS(actions.payload));
    case SET_LOADING:
      return setIn(state, ['loading'], fromJS(actions.payload));
    case SET_FAVORITE:
      const currentPokemonIndex = get(state, 'pokemons').findIndex(
        (pokemon) => pokemon.get('id') === actions.payload.pokemonId
      );
  
      if (currentPokemonIndex < 0){
        return state;
      }
  
      const isFavorite = getIn(state, ['pokemons', currentPokemonIndex, 'favorite']);
      
      return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
      // case SET_LOADING:
      //   return { ...state, loading: actions.payload };
    default:
      return state;
  }
};

export { pokemonReducer };
