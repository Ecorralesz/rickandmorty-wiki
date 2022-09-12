import { useState, useEffect } from "react";
import axios from "axios";
import SearchPlanet from "./components/SearchPlanet";
import "./App.css";
import Planet from "./components/Planet";
import ResidentInfo from "./components/ResidentInfo";
import ResidentsList from "./components/ResidentList";

function App() {
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    const id = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => setPlanet(res.data));
  }, []);

  console.log(planet);
  return (
    <div className="App">
      <div className="mural">
        <h1>Rick and Morty Wiki</h1>
        <SearchPlanet setPlanet={setPlanet} />
      </div>
      <Planet planet={planet} />
      <ResidentsList list={planet.residents} />
    </div>
  );
}

export default App;
