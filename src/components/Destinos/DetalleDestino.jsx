import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const DetalleDestino = () => {
  const { idDestino } = useParams();
  const [destination, setDestination] = useState(undefined);

  const getDataAPI = async ( ) => {

    // const findDestination = await axios.get(`https://api-node-viajes.vercel.app/destinations/id/${idDestino}`);
    const response = await fetch(
      `https://api-node-viajes.vercel.app/destinations/id/${idDestino}`
    );
    const findDestination = await response.json();

    console.log(findDestination[0]);
    setDestination(findDestination[0]);
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  if(destination){
    return (
      <>
    <div className="fruitCard-imageContainer">
          <img
            src={destination.destinationImg[0]}
            alt={destination.destinationPlace}
            className="fruitCard-image"
          />
          <img
            src={destination.destinationImg[1]}
            alt={destination.destinationPlace}
            className="fruitCard-image"
          />
          <img
            src={destination.destinationImg[2]}
            alt={destination.destinationPlace}
            className="fruitCard-image"
          />
          <img
            src={destination.destinationImg[3]}
            alt={destination.destinationPlace}
            className="fruitCard-image"
          />
        </div>

        <div className="fruitCard-info">
          <h2 className="fruitCard-name">
            {destination.destinationDate} ({destination.destinationDescription})
          </h2>
          <p className="fruitCard-p1">
            Hotel: {destination.destinationHotel.hotelName}
          </p>
          <p className="fruitCard-p1">
            Categoría: {destination.destinationHotel.hotelCategory}
          </p>
          <p className="fruitCard-p1">
            Emplazamiento: {destination.destinationHotel.hotelLocation}
          </p>
          <p className="fruitCard-p2">Precio:{destination.destinationPrice}€</p>
        </div> 
      </>
    );

  }
  



};

export default DetalleDestino;
