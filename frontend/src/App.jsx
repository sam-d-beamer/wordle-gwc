import './App.css'

function App() {
  const boardTiles = Array.from({ length: 30 }, (_, i) => i + 1)
  const keyboardRows = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    ['Enter', ...'ZXCVBNM'.split(''), 'Delete'],
  ]


  return (
    <>
    <h1>Wordle Golf World Championship</h1>
      <div className="game-board">
        {boardTiles.map((num) => (
          <div key={num}></div>
        ))}
      </div>
      <div className="keyboard">
        {keyboardRows.map((row, rowIndex) => (
          <div className="keyboard-row" key={rowIndex}>
            {row.map((key) => (
              <button 
              type="button" 
              key={key}
              className={
                key === 'Enter' || key === 'Delete' 
                  ? 'key-wide' 
                  : 'key'
                }
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
