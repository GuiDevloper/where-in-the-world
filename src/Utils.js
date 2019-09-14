import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const rest = "https://restcountries.eu/rest/v2/";
const getApi = (param, set, getBorders) => {
  let isBorders = param.indexOf(';') > -1;
  if (getBorders && !isBorders) set([]);
  axios.get(rest + param, { validateStatus: false }).then(res => {
    let err = res.status === 404;
    let data = !err ? res.data : [];
    if (set.length === 2) {
      set[0](data);
      set[1](err)
    } else {
      set(data);
    }
  });
}

const countries = (data, countriesError) => {
  return data.map((val, i) => (
    <Link to={`/${val.name}`} className="country" key={i}
      onClick={() => {
        countriesError[0]([]);
        getApi(`name/${val.name}?fullText=true`, countriesError[0], true);
      }}
    >
      <div
        className="c-flag"
        style={{ backgroundImage: `url(${val.flag})` }}
      ></div>
      <p className="c-name">{val.name}</p>
      <p className="c-people">
        <b>Population:</b> {(+val.population).toLocaleString('pt-BR')}
      </p>
      <p className="c-region">
        <b>Region:</b> {val.region}
      </p>
      <p className="c-capital">
        <b>Capital:</b> {val.capital}
      </p>
    </Link>
  ));
}

const regions = (setRegions) => {
  let regs = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return regs.map((reg, i) => (
    <p key={i} onClick={() => getApi(`region/${reg}`, setRegions)}>
      {reg}
    </p>
  ));
}

export {countries, regions, getApi};
