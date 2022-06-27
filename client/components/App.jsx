import React, { useState, useEffect } from 'react'

import { getHelloWorld } from '../apiClient'

function App() {
  const [helloWorld, setHelloWorld] = useState('')

  useEffect(() => {
    getHelloWorld()
      .then((res) => {
        setHelloWorld(res.message)
        console.log(process.env)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  return <h1>{helloWorld}</h1>
}

export default App
