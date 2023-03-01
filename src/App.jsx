import React from "react"
import { Col } from "antd"

import { Searched } from "./components/Searched"
import { PokemonList } from "./components/PokemonList.jsx"

function App() {
  const hola = [1,2,3,4,5,6,7,8,9,11,12,45,456,56];
  return (
    <div className="App">
      <Col span={8} offset={8}>
      <Searched/>
      </Col>
      <PokemonList pokemons={hola}/>
    </div>
  )
}

export default App
