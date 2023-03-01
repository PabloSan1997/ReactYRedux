import { SET_POKEMONS } from "../actions/types";

const initiallState = {
    pokemons:[],
};
const pokemonReducer=(state = initiallState, actions)=>{
    switch(actions.type){
        case SET_POKEMONS:
            return{...state, pokemons:actions.payload}
        default:
            return state;
    }
}

export{pokemonReducer}