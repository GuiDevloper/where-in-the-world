import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Country from './Country';
import Logic from './Logic';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setCountries = this.setCountries.bind(this);
    Logic();
  }

  state = {
    countries: [],
    night: true
  };

  setCountries(c) {
    this.setState({countries: c});
  }

  render() {
    return (
      <div className={`App ${this.state.night ? "night" : ""}`}>
        <nav className="App-nav">
          <p className="App-title">Where in the world?</p>
          <p
            className="App-night"
            onClick={() => this.setState({ night: !this.state.night })}
          >
            <i className="icon ion-md-moon"></i>
            {this.state.night ? "Light" : "Dark"} Mode
          </p>
        </nav>
        <Router>
          <Route path="/" exact={true}
            render={(props) => <Home {...props} state={this.state}
            setCountries={s => this.setCountries(s)}/>}
          />
          <Route path="/:country"
            render={(props) => <Country {...props} state={this.state}
            setCountries={s => this.setCountries(s)}/>}
          />
        </Router>
      </div>
    );
  }
}

export default App;
