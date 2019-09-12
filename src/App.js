import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    country: "",
    countries: [],
    error: false,
    showOp: false,
    night: true
  };
  rest = 'https://restcountries.eu/rest/v2/';

  componentDidMount() {
    this.getApi("all");
  }

  getApi(param) {
    axios.get(this.rest + param, { validateStatus: false })
      .then(res => {
        let err = res.status === 404;
        let data = !err ? res.data : [];
        this.setState({
          countries: data,
          error: err
        });
      });
  }

  getByName(e) {
    this.setState({showOp: false});
    let search = e.target.value.trim();
    search = search !== "" ? `name/${search}` : 'all';
    this.getApi(search);
  }

  countries(data) {
    return data.map((val, i) => (
      <article className="country" key={i}>
        <div className="c-flag"
          style={{ 'backgroundImage': `url(${val.flag})` }}
        ></div>
        <p className="c-name">{val.name}</p>
        <p className="c-people">
          <b>Population:</b> {val.population}
        </p>
        <p className="c-region">
          <b>Region:</b> {val.region}
        </p>
        <p className="c-capital">
          <b>Capital:</b> {val.capital}
        </p>
      </article>
    ));
  }

  regions() {
    let regs = [
      'Africa',
      'Americas',
      'Asia',
      'Europe',
      'Oceania'
    ];
    return regs.map((reg, i) => (
      <p key={i} onClick={() => this.getApi(`region/${reg}`)}>
        {reg}
      </p>)
    );
  }

  render() {
    return (
      <div className={`App ${this.state.night ? 'night' : ''}`}>
        <nav className="App-nav">
          <p className="App-title">Where in the world?</p>
          <p className="App-night" onClick={
            () => this.setState({night: !this.state.night})
          }>
            <i className="icon ion-md-moon"></i>
            {this.state.night ? 'Light' : 'Dark'} Mode
          </p>
        </nav>
        <header className="inputs">
          <div className={`search ${this.state.error ? "error" : ""}`}>
            <i className="icon ion-md-search"></i>
            <input type="text" placeholder="Search for a country..."
              onChange={(e) => this.getByName(e)}
            ></input>
          </div>
          <div className="regions">
            <p onClick={() => {
              this.setState({ showOp: !this.state.showOp })
            }}>
              Filter by Region
            </p>
            <div className="options" style={
              {'display': this.state.showOp ? 'block' : 'none'}
            }>
              {this.regions()}
            </div>
          </div>
        </header>
        <div className="countries">
          {this.countries(this.state.countries)}
        </div>
      </div>
    );
  }
}

export default App;
