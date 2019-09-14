import React from 'react';
import {getApi, regions, countries} from './Utils';

class Home extends React.Component {
  state = {
    country: "",
    error: false,
    showOp: false
  }

  componentDidMount() {
    getApi("all", this.props.setCountries);
  }

  getByName(e) {
    this.setState({ showOp: false, country: e.target.value });
    let search = e.target.value.trim();
    search = search !== "" ? `name/${search}` : "all";
    getApi(search, this.props.setCountries);
  }

  countriesError = [
    this.props.setCountries,
    err => this.setState({error: err})
  ];

  render() {
    return (
      <div className="container">
        <header className="inputs">
          <div className={`search ${this.state.error ? "error" : ""}`}>
            <i className="icon ion-md-search"></i>
            <input
              type="text"
              placeholder="Search for a country..."
              onChange={e => this.getByName(e)}
              value={this.state.country}
            ></input>
          </div>
          <div className="regions">
            <p
              onClick={() => {
                this.setState({ showOp: !this.state.showOp });
              }}
            >
              Filter by Region
            </p>
            <div
              className="options"
              style={{ display: this.state.showOp ? "block" : "none" }}
            >
              {regions(this.props.setCountries)}
            </div>
          </div>
        </header>
        <div className="container">{
          countries(this.props.state.countries, this.countriesError)
        }</div>
      </div>
    )
  }
}

export default Home;
