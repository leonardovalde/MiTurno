import React, { useState } from 'react'
import './NavBar.css'

function NavBar({ }: any) {
  return (
    <div className='container-navbar'>
    <nav className="navbar-left navbar-expand-lg navbar-dark bg-dark py-3 navbar-custom">
      <div className="container">
        <div className="row w-100 align-items-center">
          <div className="col-6">
            <span className="navbar-brand mb-0 h1">
              <span className="letter-m">M</span>
              <span className="letter-t">T</span>
            </span>
          </div>
          <div className="col-6 text-end">
            <div className="container-btn d-flex justify-content-end">
              <button className="btn btn-custom-1 me-3" type="button">Registrarse</button>
              <button className="btn btn-custom-2 me-3" type="button">Iniciar sesión</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default NavBar
