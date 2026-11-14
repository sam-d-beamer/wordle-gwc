import './App.css'

function App() {
  const numbers = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <>
    <h1>Wordle Golf World Championship</h1>
      <div className="wrapper">
        {numbers.map((num) => (
          <div key={num}></div>
        ))}
      </div>
    </>
  )
}

export default App
