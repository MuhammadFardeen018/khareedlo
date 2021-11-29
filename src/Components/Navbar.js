import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../images/logo1.png'
export default function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <Link className="navbar-brand shop" to='/'> 
    <img src={logo}></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 list" >
        <li className="nav-item navitem ">
          <Link className="nav-link active" aria-current="page" id="nav-item" to="/">Home</Link>
        </li>
        <li className="nav-item navitem">
          <Link className="nav-link" id="nav-item" to="/categories">Categories</Link>
        </li>
        <li className="nav-item navitem">
          <Link className="nav-link" id="nav-item" to="/About">Aboutus</Link>
        </li>
        <li className="nav-item navitemx">
          <Link  className="nav-link" to="/contact-us"><button type="button" className="btn btn-outline-secondary">ContactUs</button></Link>
        </li>
        
      </ul>

    </div>
  </div>
</nav>
        </div>
    )
}