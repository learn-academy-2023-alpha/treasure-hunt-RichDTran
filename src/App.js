import React, { useState } from "react"
import "./App.css"
import Playagain from "./components/Playagain"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))

  const [BombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

const handleGamePlay =(index) => {
  // alert(index)
  let updatedBoard = [...board]
  if (index === treasureLocation) {
      updatedBoard [index] = "💎"
      setBoard(updatedBoard)
  } else if (index === BombLocation) {
    updatedBoard [index] = "💣"
    setBoard (updatedBoard)
  } else {
  updatedBoard [index] = "🌴"
  setBoard(updatedBoard)
}
}
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
      {board.map((value, index) => {
        return (
        <Square
          value ={value}
          key = {index}
          index = {index}
          handleGamePlay = {handleGamePlay}
        />
        )
      })}
      </div>
      <div>
        <h2>Play Again?</h2>
        <Playagain/>
      </div>
    </>
  )
}

export default App
