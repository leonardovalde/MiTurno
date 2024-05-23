import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import NavBar from './components/NavBar'

const App = () => (
  <BrowserRouter>
    <div className="main-container">
        <NavBar />
    </div>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(<App />)
