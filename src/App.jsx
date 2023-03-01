import { Col } from "antd"
import React from "react"
import { Searched } from "./components/Searched"

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
      <Searched/>
      </Col>
    </div>
  )
}

export default App
