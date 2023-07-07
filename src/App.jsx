import { useState } from "react"

function App() {

  const [table, setTable] = useState(Array(9).fill(""))
  const [player, setPlayer] = useState('X')

  const handlePlayerClick = (index) => {
    if (table[index] === "") {
      const newTable = [...table]
      newTable[index] = player
      setTable(newTable)
      setPlayer(player === 'X' ? 'O' : 'X')
    }
  }

  return (
    <div className="tabuleiro">
      {table.map((value, index) => (
        <div key={index}
          className="celula"
          onClick={() => handlePlayerClick(index)}>{value}</div>
      ))}
    </div>
  )
}

export default App
