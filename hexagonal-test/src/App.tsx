

function App() {

  const url = import.meta.env.VITE_BACKEND_URL

  return (
    <div className="App">
      { url }
    </div>
  )
}

export default App
