import React, { useState } from 'react'
import userContext from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



//
const ResumenCompra = () => {
    const {user, userCero} = useContext(userContext);
    if(user) console.log(user.email);

  
    const getDataAPI_destinations = async (idDestino) => {
        console.log(idDestino);
        const response = await fetch(`https://api-node-viajes.vercel.app/destinations/id/${idDestino}`);
        const findDestination = await response.json();
        // console.log(findDestination[0]);
        return findDestination[0];
      };

 
    const getDataAPI_activities = async (idActividad) => {
        console.log(idActividad);
        const response = await fetch(`https://api-node-viajes.vercel.app/activities/id/${idActividad}`);
        const findActivity = await response.json();
        // console.log(findActivity[0]);
        return findActivity[0];
      };

      const actividadUno = getDataAPI_activities(user.activity[0]);
      console.log(actividadUno);

    //   console.log(actividadUno.activityPlace);

    const numeroDestinosComprados = userCero.destination.length;
    const numeroDestinosTotal = user.destination.length;

    // const destinos =[];
    // for(let i=0; i<numeroDestinosTotal; i++){
    //         destinos.push(getDataAPI_destinations(user.destination[i]));
    //         console.log(destinos[i]);
    // }


    // const actividades = user.destination.map((idActividad,i)=>{
        // return getDataAPI_activities(idActividad);
    // });
    // const actividadUno = getDataAPI_activities(user.activity[0]);
    // console.log(actividadUno.activityPlace)
    // console.log(destinos);
    // console.log(actividades);
    // // for(let i=numeroDetinosComprados; i<=numeroTotalDestinos; i++){
    // //     idDestino
    // // }

    


  return (
    <>
    <div>ResumenCompra</div>
    <div>

        <div>{user.activity[0]}</div>
        <div>Articulos comprados anteriormente:{numeroDestinosComprados}</div>
        <div>Articulos en la cesta:{numeroDestinosTotal-numeroDestinosComprados}</div>

    </div>
    </>
  )
}

export default ResumenCompra