import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <div className='mt-3'>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand display-6 text-primary fw-bold" to="/iweather">iWeather</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse col-auto" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/iweather">Home</Link>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="#global">Global</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to='#about'>About</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to='#contact'>Contact</HashLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
