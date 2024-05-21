import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import CreateTurnModal from './components/CreateTurnModal'

const options = [
  { value: '01', label: 'Leonard Van Houten' },
  { value: '02', label: 'Piet Mondrian' },
  { value: '03', label: 'Vladimir Nabokov' },
]
const App = () => (
  <div className="container">
    <CreateTurnModal
      options={options}
      roleType="admin"
      onCancel={() => {}}
      onCreate={() => {}}
    />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
