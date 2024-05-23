import React, {  } from 'react'
import './Register.css'

function Register({ }: any) {
  return (
    <div className="container-register">
      <div className="white-container">
        <section className="container-form">
          <header>
            <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="Usuario" className="imagen-redonda" />
          </header>   
          <form className="form" action="#">
              <div className="column">
                <div className="input-box">
                    <label>Identificador</label>
                    <input placeholder="Ingrese su identificador" type="number"/>
                  </div>
                  <div className="input-box">
                    <label>Nombre(s)</label>
                    <input placeholder="Ingrese su nombre" type="text"/>
                  </div>
                  <div className="input-box">
                    <label>Apellido(s)</label>
                    <input placeholder="Ingrese su apellido" type="text"/>
                  </div>
              </div>
              <div className="input-box">
                  <label>Correo electrónico</label>
                  <input placeholder="Ingrese su correo electrónico" type="email"/>
              </div>

              <div className="input-box address">
                <label>Organización</label>
                <input placeholder="Ingresa tu organización" type="text"/>
                <label>Dirección</label>
                <input placeholder="Ingresa tu dirección" type="text"/>
              </div>
              <div className="column">
                <div className="input-box">
                    <label>Contraseña</label>
                    <input placeholder="Ingrese su contraseña" type="password"/>
                  </div>
                  <div className="input-box">
                    <label>Confirme su contraseña</label>
                    <input placeholder="Confirme su contraseña" type="password"/>
                  </div>
              </div>
              <button>Registrarse</button>
          </form>
        </section>
        </div>
    </div>
  )
}

export default Register
