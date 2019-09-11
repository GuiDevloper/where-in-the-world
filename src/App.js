import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <p className="App-title">
          Where in the world?
        </p>
        <p
          className="App-night"
        >
          Dark Mode
        </p>
      </nav>
      <header>
        <input type="text" placeholder="Search for a country..."></input>
      </header>
    </div>
  );
}

export default App;
