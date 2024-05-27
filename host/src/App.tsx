import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
<<<<<<< HEAD
import MenuAdminPage from './pages/admin/MenuAdminPage'
import NotFoundPage from './pages/NotFoundPage'
=======
>>>>>>> 45d778e7781f0da6506ad3e0577bdce7df123e58
import './index.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/admin/menu_admin" element={<MenuAdminPage />} />
    </Routes>
  </BrowserRouter>
)

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
