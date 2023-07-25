import React, { useEffect, useState } from 'react'
import userContext from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const ResumenCompra = () => {

    const {user, userCero} = useContext(userContext);
    const [destinos, setDestinos] = useState([]);
    // const [actividades, setActividades] = useState([]);

//----------------------------------------------------------------------------------------------------------
    const getDataAPI_destinations = async (idDestino) => {
        const response = await fetch(`https://api-node-viajes.vercel.app/destinations/id/${idDestino}`);
        const findDestination = await response.json();
        return findDestination[0];
      };

      // const getDataAPI_activities = async (idActividad) => {
      //   const response = await fetch(`https://api-node-viajes.vercel.app/destinations/id/${idActividad}`);
      //   const findActivity = await response.json();
      //   return findActivity[0];
      // };
      
//----------------------------------------------------------------------------------------------------------
    const numeroDestinosComprados = userCero.destination.length;
    const numeroDestinosTotal = user.destination.length;

    const numeroActividadesCompradas = userCero.activity.length;
    const numeroActividadesTotal = user.activity.length;
//----------------------------------------------------------------------------------------------------------
    const getDestinos = async () => {
      for(let i=0; i<numeroDestinosTotal; i++){
        destinos.push(await getDataAPI_destinations(user.destination[i]));
      }
      setDestinos(destinos);
    }

    // const getActividades = async () => {
    //   for(let i=0; i<numeroActividadesTotal; i++){
    //     destinos.push(await getDataAPI_activities(user.activity[i]));
    //   }
    //   setActividades(actividades);
    // }
//----------------------------------------------------------------------------------------------------------
useEffect(() => {
  getDestinos();
  console.log(destinos);
}, []);


    // getActividades();
    // console.log(actividades);
//----------------------------------------------------------------------------------------------------------
  const renderDestinos = () => {
    return destinos.map( (dest, i) => {
        <li key={i}>
          <div>
            <p>{dest.destinationPlace}</p>
          </div>
        </li>
  });
  };
    
  // const renderActividades = () => {
  //   return actividades.map( (activ, i) => {
  //       <li key={i}>
  //         <div>
  //           <p>{activ.activityPlace}</p>
  //         </div>
  //       </li>
  // });
  // };
//----------------------------------------------------------------------------------------------------------

  return (
    <>
    <div>ResumenCompra</div>
    <div>

        {/* <div>{user.activity[0]}</div> */}
        <div>Destinos comprados anteriormente:{numeroDestinosComprados}</div>
        <div>Destinos en la cesta:{numeroDestinosTotal-numeroDestinosComprados}</div>
        <div>Actividades compradas anteriormente:{numeroActividadesCompradas}</div>
        <div>Destinos en la cesta:{numeroActividadesTotal-numeroActividadesCompradas}</div>
    </div>
    <section>{renderDestinos()}</section>;
    {/* <section>{renderActividades()}</section>; */}
    </>
  ) 
}

export default ResumenCompra