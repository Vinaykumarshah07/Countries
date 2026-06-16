import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import countries from "../countriesdata.js";
import "./Countrydetail.css";


export default function Countrydetail() {
  const { country: countryParam } = useParams();
  const decodedCountry = decodeURIComponent(countryParam || "");
  const { state }  = useLocation()
  const country =  state?.data||countries.find(
    (item) => item.name?.common?.toLowerCase() === decodedCountry.toLowerCase()
  );

    console.log(country);
  

  if (!country) {
  return (
    <main>
      <div className="country-details-container">
        <p>Country not found.</p>
      </div>
    </main>
  );
}

  const flag = `https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`;
  const nativeName = country.name?.official || country.name?.common;
  const currencies = Object.values(country.currencies || {})
    .map((currency) => currency.name)
    .join(", ");
  const languages = Object.values(country.languages || {}).join(", ");
  const borderCountries = (country.borders || []).map((border) => {
    const borderCountry = countries.find((item) => item.cca3 === border);
    return borderCountry?.name?.common || border;
  });

  return (
    <main>
      <div className="country-details-container">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </button>
        <div className="country-details">
          <img src={flag} alt={`${country.name.common} flag`} />
          <div className="details-text-container">
            <h1>{country.name.common}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">
                  {country.population?.toLocaleString()}
                </span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{country.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{country.subregion || "N/A"}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{country.capital?.[0] || "N/A"}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">
                  {country.tld?.join(", ") || "N/A"}
                </span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{currencies || "N/A"}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{languages || "N/A"}</span>
              </p>
            </div>
            {borderCountries.length > 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>
                {borderCountries.map((border) => (
                  <Link key={border} to={`/${encodeURIComponent(border)}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
