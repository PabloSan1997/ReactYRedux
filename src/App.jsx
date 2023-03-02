import React from "react"
import { Col } from "antd"
import { Searched } from "./components/Searched"
import { PokemonList } from "./components/PokemonList.jsx"
import logo from "./statics/logo.svg";
import { getPokemons, getPokemonsDetails } from "./API";
import { setPokemonsActions as setPokemons } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons=useSelector(state=>state.pokemons);
  const dispatch = useDispatch();
  React.useEffect(
    ()=>{
      (async ()=>{
        const datos = await getPokemons();
        const datosDetalles = await Promise.all(datos.results.map(elemento=>
          getPokemonsDetails(elemento)
        ));
       dispatch(setPokemons(datosDetalles));
      })();
    }
    ,[]);
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <img src={logo} alt="pokedex" className="imagenT"/>
      <Searched/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  )
}


export default App;
