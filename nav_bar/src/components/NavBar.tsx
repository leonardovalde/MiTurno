import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className='container-navbar'>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom py-3">
        <div className="container">
          <a className="navbar-brand" href="/" >
            <span className="letter-m">M</span>
            <span className="letter-t">T</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/register">Registrarse</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-custom me-3" href="/login" role="button">Iniciar sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
