import { getPokemonsDetails } from "../API";
import { SET_LOADING, SET_POKEMONS } from "./types";

const setPokemonsActions = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
const setLoading=(payload)=>({
  type:SET_LOADING,
  payload
});
const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const datosDetalles = await Promise.all(pokemons.results.map(elemento=>
        getPokemonsDetails(elemento)
      ));
      dispatch(setPokemonsActions(datosDetalles));
  };
export { setPokemonsActions, getPokemonsWithDetails, setLoading };
