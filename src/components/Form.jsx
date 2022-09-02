import React, { useState, useContext } from "react"
import { MyContext } from "../App"

const Form = () => {
  const [input, setInput] = useState("")
  const { setName } = useContext(MyContext)

  const handleClick = (e) => {
    e.preventDefault()
    setName(input)
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form>
      <label htmlFor="name">Your Name: </label>
      <input type="text" name="name" onChange={handleChange} />
      <button className="btn btn-primary" onClick={handleClick}>
        Submit
      </button>
    </form>
  )
}

export default Form
