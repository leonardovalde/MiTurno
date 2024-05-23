import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Home from './components/Home'

const App = () => (
  <div className="main-container">
    <Home />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
