import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Menu from './components/Menu'

const App = () => (
  <div className="main-container">
    <Menu />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
