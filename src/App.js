import React, { useState, createContext } from "react"
import Wrapper from "./components/Wrapper"
import "./cyborg_bootstrap.css"

export const MyContext = createContext()

function App() {
  const [name, setName] = useState("")
  return (
    <MyContext.Provider value={{ name, setName }}>
      <Wrapper></Wrapper>
    </MyContext.Provider>
  )
}

export default App
