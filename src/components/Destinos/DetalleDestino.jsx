import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const DetalleDestino = () => {
  const { idDestino } = useParams();
  const [destination, setDestination] = useState([]);

  const getDataAPI = async () => {
    const response = await fetch("https://api-frutas.vercel.app/fruits");
    const res = await response.json();
    const findDestination = res.find((destination) => destination.fruitName === idDestino);
    setDestination(findDestination);
    console.log(res);
    console.log(idDestino);
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  return (
    <>
      <div className="fruitCard-imageContainer">
        <img
          src={destination.image}
          alt={destination.fruitName}
          className="fruitCard-image"
        />
      </div>
      <div className="fruitCard-info">
        <h2 className="fruitCard-name">
          {destination.fruitName} ({destination.type})
        </h2>
        <p className="fruitCard-p1">Origen: {destination.origin}</p>
        <p className="fruitCard-p2">Precio:{destination.priceKg}€/Kg</p>
      </div>
    </>
  );
};

export default DetalleDestino;