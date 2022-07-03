import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import AdminPanel from './AdminPanel'

function App() {
  return (
    <div className="main">
      <h1>Tickets</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  )
}

export default App
