import React, { useState, useEffect } from 'react'

import Home from './Home'

import { getHelloWorld } from '../apiClient'

const sampleProducts = [
  { id: 1, name: 'Stick', description: 'Very pointy', price: 2.5 },
  { id: 2, name: 'Paperclip', description: 'Eager to help', price: 10 },
]

function App() {
  const [helloWorld, setHelloWorld] = useState('')

  useEffect(() => {
    getHelloWorld()
      .then((res) => {
        setHelloWorld(res.message)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  return (
    <>
      <h1>{helloWorld}</h1>
      <Home products={sampleProducts} />
    </>
  )
}

export default App
