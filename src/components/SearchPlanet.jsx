import React from "react";
import { useState } from "react";
import axios from "axios";

const SearchPlanet = ({setPlanet}) => {
  const [planetId, setPlanetId] = useState("");

  const searchPlanet = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${planetId}`)
    .then(res => setPlanet(res.data));
  };
  return (
    <div className="cont_search">
      <input 
      type="text" 
      value={planetId}
      onChange={e => setPlanetId(e.target.value)}
      placeholder="Type the planet ID"
      />
      <button onClick={searchPlanet}>Search</button>
    </div>
  );
};

export default SearchPlanet;
