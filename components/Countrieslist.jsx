import { useState, useEffect } from "react";
import countries from "../countriesdata.js";
import CountryCard from "./CountryCard";
import CountryListshimmer from "./CountryListshimmer";

export default function Countrieslist({ query, selectedRegion }) {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for shimmer effect
    const timer = setTimeout(() => {
      let result = countries;

      // Filter by search query
      if (query) {
        result = result.filter((country) =>
          country.name?.common?.toLowerCase().includes(query.toLowerCase())
        );
      }

      // Filter by region
      if (selectedRegion) {
        result = result.filter((country) => country.region === selectedRegion);
      }

      setFilteredCountries(result);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, selectedRegion]);

  if (isLoading) {
    return <CountryListshimmer />;
  }

  return (
    <div className="countries-container">
      {filteredCountries.length > 0 ? (
        filteredCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            name={country.name?.common}
            flag={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`}
            region={country.region}
            capital={country.capital?.[0] || "N/A"}
          />
        ))
      ) : (
        <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
          No countries found
        </p>
      )}
    </div>
  );
}
