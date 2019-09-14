import React from 'react';
import {Link} from 'react-router-dom';
import {getApi} from './Utils';

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.setBorders = this.setBorders.bind(this);
    if (this.props.state.countries.length === 0) {
      getApi(`name/${this.props.match.params.country}?fullText=true`,
        this.props.setCountries, true);
    }
  }

  state = {
    borders: []
  }
  Monted = true;

  setBorders(b) {
    if (this.Monted) {
      this.setState({borders: b});
    }
  }

  componentWillUnmount() {
    this.props.setCountries([]);
  }

  render() {
    let ctry = this.props.state.countries;
    let borders = ctry[0] ? ctry[0].borders : [];
    if (borders.length > 0) {
      getApi(`alpha?codes=${borders.join(';')}&fields=name`, this.setBorders);
    }
    return (
      <div className="country-page container">
        <button>
          <Link to="/" exact="true" onClick={() => this.Monted = false}>
            {"<- Back"}
          </Link>
        </button>
        {ctry[0] ? (
          <article className="single-country">
            <img className="s-flag" alt="flag" src={ctry[0].flag}></img>
            <section className="s-data container">
              <p className="s-title">{ctry[0].name}</p>
              <div className="container">
                <p><b>Native Name:</b> {ctry[0].nativeName}</p>
                <p><b>Population:</b> {
                  (+ctry[0].population).toLocaleString('pt-BR')
                }</p>
                <p><b>Region:</b> {ctry[0].region}</p>
                <p><b>Sub Region:</b> {ctry[0].subregion}</p>
                <p><b>Capital:</b> {ctry[0].capital}</p>
              </div>
              <div className="s-lastInfo container">
                <p><b>Top Level Domain:</b> {ctry[0].topLevelDomain}</p>
                <p><b>Currencies:</b> {
                  ctry[0].currencies.map((el, i) => el.name).join(", ")
                }</p>
                <p><b>Languages:</b> {
                  ctry[0].languages.map((el, i) => el.name).join(", ")
                }</p>
              </div>
              <section className="border">
                <b>Border Countries: </b>
                {this.state.borders ? this.state.borders.map((el, i) => (
                  <button className="s-border" key={i}>
                    <Link to={`/${el.name}`} onClick={() => {
                      this.setBorders([]);
                      this.props.setCountries([]);
                      getApi(`name/${el.name}?fullText=true`,
                        this.props.setCountries, true);
                    }}>
                      {el.name}
                    </Link>
                  </button>
                  )
                ) : ''}
              </section>
            </section>
          </article>
        ) : ''}
      </div>
    );
  }
}

export default Country;
