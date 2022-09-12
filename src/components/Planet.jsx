import React from "react";

const Planet = ({ planet }) => {

  // const leng = planet?.residents;

  console.log(planet)

  return (
    <div className="cont_LocationInfo">
      <h2>{planet?.name}</h2>
      <div className="sub_cont_LocationInfo">
        <h5>Type: {planet?.type}</h5>
        <h5>Dimension: {planet?.dimension}</h5>
        <h5>Population: {planet.residents?.length}</h5>
      </div>
    </div>
  );
};

export default Planet;
