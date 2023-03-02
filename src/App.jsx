import React from "react"
import { Col, Spin } from "antd"
import { Searched } from "./components/Searched"
import { PokemonList } from "./components/PokemonList.jsx"
import logo from "./statics/logo.svg";
import { getPokemons, getPokemonsDetails } from "./API";
import { getPokemonsWithDetails, setLoading, setPokemonsActions as setPokemons } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  React.useEffect(
    () => {
      (async () => {
        dispatch(setLoading(true));
        const datos = await getPokemons();
        dispatch(setLoading(false));
        dispatch(getPokemonsWithDetails(datos));
      })();
    }
    , []);
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <img src={logo} alt="pokedex" className="imagenT" />
        <Searched />
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size="large" />
      </Col> : <PokemonList pokemons={pokemons} />}
    </div>
  )
}


export default App;
