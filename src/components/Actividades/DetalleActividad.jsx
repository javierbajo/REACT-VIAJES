import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetalleActividad = () => {
    const { idActividad } = useParams();
    const [activity, setActivity] = useState(undefined);
  
    const getDataAPI = async ( ) => {
  
      // const findDestination = await axios.get(`https://api-node-viajes.vercel.app/destinations/id/${idDestino}`);
      const response = await fetch(
        `https://api-node-viajes.vercel.app/activities/id/${idActividad}`
      );
      const findActivity = await response.json();
  
      console.log(findActivity[0]);
      setActivity(findActivity[0]);
    };
  
    useEffect(() => {
      getDataAPI();
    }, []);
  
    if(activity){
      return (
        <>
      <div className="fruitCard-imageContainer">
            <img
              src={activity.activityImg}
              alt={activity.activityPlace}
              className="fruitCard-image"
            />
          </div>
  
          <div className="fruitCard-info">
            <h2 className="fruitCard-name">
              {activity.activityDate} ({activity.activityDescription})
            </h2>
            {/* <p className="fruitCard-p1">
              Hotel: {destination.destinationHotel.hotelName}
            </p>
            <p className="fruitCard-p1">
              Categoría: {destination.destinationHotel.hotelCategory}
            </p>
            <p className="fruitCard-p1">
              Emplazamiento: {destination.destinationHotel.hotelLocation}
            </p> */}
            <p className="fruitCard-p2">Precio:{activity.activityPrice}€</p>
          </div> 
        </>
      );
  
    }
    
  
  
  
  };
export default DetalleActividad