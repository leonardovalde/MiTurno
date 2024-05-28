import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MenuAdminPage from './pages/admin/MenuAdminPage'
import MenuUserPage from './pages/user/MenuUserPage'
import TurnListUserPage from './pages/user/TurnListUserPage'
import NotFoundPage from './pages/NotFoundPage'
import UserListAdminPage  from './pages/admin/UserListAdminPage'
import ShiftListAdminPage  from './pages/admin/ShiftListAdminPage'
import './index.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin/menu_admin" element={<MenuAdminPage />} />
      <Route path="/admin/user_list_page" element={<UserListAdminPage />} />
      <Route path="/admin/shift_list_page" element={<ShiftListAdminPage />} />
      <Route path="/user/create_turn" element={<MenuUserPage />} />
      <Route path="/user/turn_list" element={<TurnListUserPage />} />
    </Routes>
  </BrowserRouter>
)

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
