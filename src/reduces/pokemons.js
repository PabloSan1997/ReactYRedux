import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initiallState = {
  pokemons: [],
  loading: true,
};
const pokemonReducer = (state = initiallState, actions) => {
  switch (actions.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: actions.payload };
    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemons];
      const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
        return pokemon.id === actions.payload.pokemonId;
      });

      if (currentPokemonIndex < 0) {
        return state;
      }

      newPokemonsList[currentPokemonIndex].favorite =
        !newPokemonsList[currentPokemonIndex].favorite;

      return { ...state, pokemons: newPokemonsList };
    case SET_LOADING:
      return { ...state, loading: actions.payload };
    default:
      return state;
  }
};

export { pokemonReducer };
