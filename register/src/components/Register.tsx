import React, { useState } from 'react';
import { registerUser } from '../api/RegisterUser';
import { ToastContainer, toast } from 'react-toastify';

import './Register.css';

function Register() {
  const [identifier, setIdentifier] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    try {
      await registerUser(identifier, firstName, lastName, organization, address, email, password, 'user');
      toast.success('¡Registro exitoso!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
        onClose: () => window.location.href = '/login'
      });
      setError('');
    } catch (error) {
      console.log("Error al registrarse:", error);
      setError('El registro falló. Inténtalo de nuevo.');
      setSuccess('');
    }
  };

  return (
    <div className="container-register">
      <div className="white-container">
        <section className="container-form">
          <header>
            <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="Usuario" className="imagen-redonda" />
          </header>
          <form className="form" onSubmit={handleSubmit}>
            <div className="column">
              <div className="input-box">
                <label>Identificador</label>
                <input placeholder="Ingrese su identificador" type="number" required value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
              </div>
              <div className="input-box">
                <label>Nombre(s)</label>
                <input placeholder="Ingrese su nombre" type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="input-box">
                <label>Apellido(s)</label>
                <input placeholder="Ingrese su apellido" type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="input-box">
              <label>Correo electrónico</label>
              <input placeholder="Ingrese su correo electrónico" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-box address">
              <label>Organización</label>
              <input placeholder="Ingresa tu organización" type="text" required value={organization} onChange={(e) => setOrganization(e.target.value)} />
              <label>Dirección</label>
              <input placeholder="Ingresa tu dirección" type="text" required value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="column">
              <div className="input-box">
                <label>Contraseña</label>
                <input placeholder="Ingrese su contraseña" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="input-box">
                <label>Confirme su contraseña</label>
                <input placeholder="Confirme su contraseña" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            <button type="submit">Registrarse</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Register;
