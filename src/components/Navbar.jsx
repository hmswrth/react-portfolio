import React from 'react'
import {BsTerminal} from 'react-icons/bs';
import {FaHamburger} from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#"> <BsTerminal size={30} /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <FaHamburger />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Experience</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
          <li className="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
