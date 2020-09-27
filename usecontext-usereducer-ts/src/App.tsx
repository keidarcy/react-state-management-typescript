import React from 'react';
import './App.css';
import { AppProvider } from './context';
import Proudcts from './Proudcts';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Proudcts />
      </AppProvider>
    </div>
  );
}

export default App;
