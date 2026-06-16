import { useContext, useEffect, useState } from "react";
import Sreachbar from "./Sreachbar";
import Selectmenu from "./Selectmenu";
import Countrieslist from "./Countrieslist";
import { ThemeContext } from "../Context/ThemeContext"


export default function Home() {
    const [query, setQuery] = useState("");
   const [selectedRegion, setSelectedRegion] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <Sreachbar setQuery={setQuery} />
        <Selectmenu setSelectedRegion={setSelectedRegion} />
      </div>
      <Countrieslist
        query={query}
        selectedRegion={selectedRegion}
      />
    </main>
  );
}
