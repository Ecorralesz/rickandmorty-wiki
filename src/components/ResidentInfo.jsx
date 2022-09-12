import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ResidentInfo = ({ link }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(`${link}`).then((res) => {
      //console.log(res.data);
      setInfo(res.data);
    });
  }, [link]);

  let episodies = info.episode?.length;

  return (
    <div className="card">
      <img src={info.image} alt="img-card" />
      <div className="container_info">
        <h2>Name:{info.name}</h2>
        <div className="line">
          <hr />
        </div>
        <h5>
          <span>Race:</span> <br /> {info.species}
        </h5>
        <h5>
          <span>Origen: </span> <br />
          {info.origin?.name}
        </h5>
        <h5>
          <span>Status: </span> <br />
          {info.status}
        </h5>
        <h5>
          <span>Episodes where appear:</span> <br />
          {episodies}
        </h5>
      </div>
    </div>
  );
};

export default ResidentInfo;
