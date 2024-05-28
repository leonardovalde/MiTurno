import React, { useState, useEffect } from 'react';
import { registerUser } from '../api/RegisterUser';
import { getProviders } from '../api/ProviderApi';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Register.css';

function Register() {
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState('');

  const [identifier, setIdentifier] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const data = await getProviders();
        setProviders(data);
      } catch (error) {
        console.error('Error fetching providers:', error);
      }
    };

    fetchProviders();
  }, []);

  const handleProviderChange = (e) => {
    setSelectedProvider(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    try {
      await registerUser(identifier, firstName, lastName, selectedProvider, address, email, password, 'user');
      setError('');
      toast.success('¡Registro exitoso!', {
        position: "top-center",
        autoClose: 3000,
        transition: Slide,
        onClose: () => window.location.href = '/login' 
      });
    } catch (error) {
      console.error("Error al registrarse:", error);
      if (error.message.includes('User already exists')) {
        setError('El usuario ya existe. Intenta con otro correo.');
        toast.error('El usuario ya existe. Intenta con otro correo.', {
          position: "top-center",
          autoClose: 3000, // 5 seconds
          transition: Slide
        });
      } else {
        setError('El registro falló. Inténtalo de nuevo.');
        toast.error('El registro falló. Inténtalo de nuevo.', {
          position: "top-center",
          autoClose: 5000, 
          transition: Slide
        });
      }
      setSuccess('');
    }
  };

  return (
    <div className="container-register">
      <div className="white-container-register">
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
              <div className='select-box'>
                <select value={selectedProvider} onChange={handleProviderChange} required>
                  <option value="">Selecciona un proveedor</option>
                  {providers.map((provider) => (
                    <option key={provider.id} value={provider.id}>
                      {provider.name}
                    </option>
                  ))}
                </select>
              </div>
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
      <ToastContainer />
    </div>
  );
}

export default Register;
