import React, { useContext } from "react"
import { MyContext } from "../App"

const Navbar = () => {
  const context = useContext(MyContext)
  return (
    <div className="sticky-top">
      <h1>Hi, {context.name}!</h1>
    </div>
  )
}

export default Navbar
