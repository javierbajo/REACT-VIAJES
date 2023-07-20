import React from 'react'
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';

const DetalleFrutas = () => {
  const { fruitName } = useParams();
  const [fruit, setFruit] = useState([]);

  const getDataAPI = async () => {
    const response = await fetch("http://localhost:3001/fruits");
    const res = await response.json();
    const findFruit = res.find((fruit) => fruit.fruitName === fruitName);
    setFruit(findFruit);
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  return (
    <>
      <div className="fruitCard-imageContainer">
        <img
          src={fruit.image}
          alt={fruit.fruitName}
          className="fruitCard-image"
        />
      </div>
      <div className="fruitCard-info">
        <h2 className="fruitCard-name">
          {fruit.fruitName} ({fruit.type})
        </h2>
        <p className="fruitCard-p1">Origen: {fruit.origin}</p>
        <p className="fruitCard-p2">Precio:{fruit.priceKg}€/Kg</p>
      </div>
    </>
  );
};

export default DetalleFrutas;