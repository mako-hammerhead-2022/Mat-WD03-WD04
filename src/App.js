import './App.css'

import Home from './components/Home'

function App() {
  const sampleProducts = [
    { id: 1, name: 'Stick', description: 'Very pointy', price: 2.5 },
    { id: 2, name: 'Paperclip', description: 'Eager to help', price: 10 },
  ]

  return (
    <div className="App">
      <Home products={sampleProducts} />
    </div>
  )
}

export default App
