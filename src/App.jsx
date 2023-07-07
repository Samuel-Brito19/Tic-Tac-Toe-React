import { useEffect, useState } from "react"

function App() {

  const [table, setTable] = useState(Array(9).fill(""))
  const [player, setPlayer] = useState('X')
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    const winnerLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    //N entendi
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i]
      if (table[a] !== "" && table[a] === table[b] &&
        table[b] === table[c]) {
        setWinner(table[a])
        break;
      }
    }
  }, [table])

  const handlePlayerClick = (index) => {
    if (table[index] === "") {
      const newTable = [...table]
      newTable[index] = player
      setTable(newTable)
      setPlayer(player === 'X' ? 'O' : 'X')
    }
  }

  return (
    <>
      <div className="tabuleiro">
        {table.map((value, index) => (
          <div
            key={index}
            className='celula'
            onClick={() => handlePlayerClick(index)}>{value}</div>
        ))}
      </div>

      {winner && (
        <div className="winner">
          The player {winner} wins!
        </div>
      )}
    </>
  )
}

export default App
