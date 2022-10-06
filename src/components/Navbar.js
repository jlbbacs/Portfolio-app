import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
import Logo from '../images/logo.svg';

function navbar() {
  return (

    <nav class="navbar navbar-expand-lg bg-light shadow-lg">
    <div class="container">
    <Link to="/">
        <img className='my-logo' src ={Logo} alt="my logo"/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link className="nav-link " to="/">Home</Link>
      <Link className="nav-link" to="about">About</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
      <Link className="nav-link" to="/project">Project</Link>
       
      </div>
    </div>
  </div>
</nav>


  )
}

export default navbar
