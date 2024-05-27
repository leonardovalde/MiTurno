import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'

import './index.css'
import SideBar, { SideBarProps } from './components/SideBar'

const [user, setUser] = useState({ name: '', role: '', onClickLogout: () => {} });

useEffect(() => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

const props: SideBarProps = {
  options: [
    {
      title: 'Ver Turnos',
      icon: 'ic:baseline-format-list-bulleted',
      onClick: () => {
        console.log('Home')
      },
    },
    {
      title: 'Crear Turno',
      icon: 'ic:outline-add-box',
      onClick: () => {
        console.log('Home')
      },
    },
  ],
  user: {
    name: 'Jack Herrington',
    role: 'Admin',
    onClickLogout: () => {
      console.log('Logout')
      localStorage.removeItem('user');
    },
  },
}
const App = () => (
  <div className="container">
    <SideBar options={props.options} user={props.user} />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
