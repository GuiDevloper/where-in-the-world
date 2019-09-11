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
      <div className="countries">
        <article className="country">
          <img className="c-flag" alt="Flag of this country"
            src="https://restcountries.eu/data/bra.svg"></img>
          <p className="c-name">Germany</p>
          <p className="c-people"> <b>Population:</b> 2 </p>
          <p className="c-region"> <b>Region:</b> Europe </p>
          <p className="c-capital"> <b>Capital:</b> Berlin </p>
        </article>
        <article className="country">
          <img className="c-flag" alt="Flag of this country"
            src="https://restcountries.eu/data/bra.svg"></img>
          <p className="c-name">Germany</p>
          <p className="c-people"> <b>Population:</b> 2 </p>
          <p className="c-region"> <b>Region:</b> Europe </p>
          <p className="c-capital"> <b>Capital:</b> Berlin </p>
        </article>
        <article className="country">
          <img className="c-flag" alt="Flag of this country"
            src="https://restcountries.eu/data/bra.svg"></img>
          <p className="c-name">Germany</p>
          <p className="c-people"> <b>Population:</b> 2 </p>
          <p className="c-region"> <b>Region:</b> Europe </p>
          <p className="c-capital"> <b>Capital:</b> Berlin </p>
        </article>
        <article className="country">
          <img className="c-flag" alt="Flag of this country"
            src="https://restcountries.eu/data/bra.svg"></img>
          <p className="c-name">Germany</p>
          <p className="c-people"> <b>Population:</b> 2 </p>
          <p className="c-region"> <b>Region:</b> Europe </p>
          <p className="c-capital"> <b>Capital:</b> Berlin </p>
        </article>
      </div>
    </div>
  );
}

export default App;
