import React from 'react';
import './App.css';
import Header from './Header'
import Artist from './Artist'

function App() {
  return (
    <div className="App">
      <Header />
      <Artist name="Mike"/>
    </div>
  );
}

export default App;
