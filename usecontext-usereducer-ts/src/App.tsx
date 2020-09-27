import React from 'react'
import logo from './logo.svg'
import './App.css'
import { AppProvider } from './context'
import Proudcts from './Proudcts'

function App() {
  return (
    <div className="App">
      <AppProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Proudcts />
        </header>
      </AppProvider>
    </div>
  )
}

export default App
