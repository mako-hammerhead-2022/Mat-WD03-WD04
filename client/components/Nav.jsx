import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <h1 className="title-heading">Tickets</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
