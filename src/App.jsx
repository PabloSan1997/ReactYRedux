import React from "react"
import { Col } from "antd"
import { Searched } from "./components/Searched"
import { PokemonList } from "./components/PokemonList.jsx"
import logo from "./statics/logo.svg";
import { getPokemons } from "./API";
import { connect } from "react-redux";
import { setPokemonsActions } from "./actions";

function App({pokemons, setPokemons}) {
  console.log(pokemons);
  React.useEffect(
    ()=>{
      (async ()=>{
        const datos = await getPokemons();
       setPokemons(datos.results)
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

const mapStateToProps=(state)=>({
  pokemons:state.pokemons
});
const mapDispatchToProps=(dispatch)=>({
  setPokemons:(value)=>dispatch(setPokemonsActions(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
