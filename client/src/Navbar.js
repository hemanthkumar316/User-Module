import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="#">
          Rubixie
        </Link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/signup">Register</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/store">DataStore</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar