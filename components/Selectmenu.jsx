import React from "react";

export default function Selectmenu({ setSelectedRegion }) {
  return (
    <select
      className="filter-by-region"
      onChange={(e) => setSelectedRegion(e.target.value)}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}