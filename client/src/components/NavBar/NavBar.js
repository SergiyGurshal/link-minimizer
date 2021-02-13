import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

import './nav-bar.sass'

export default function NavBar() {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = (e) => {
    e.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <div className="nav-bar">
      <ul className="nav-bar_list">
        <li className="nav-bar_item">
          <NavLink to="/create">Cteate</NavLink>
        </li>
        <li className="nav-bar_item">
          <NavLink to="/links">Links</NavLink>
        </li>
        <li className="nav-bar_item">
          <a href="/" onClick={logoutHandler}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}
