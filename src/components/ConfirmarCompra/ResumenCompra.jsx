import React, { useEffect, useState } from 'react'
import userContext from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const ResumenCompra = () => {

    const {user, userCero} = useContext(userContext);
    const [destinos, setDestinos] = useState([]);
//----------------------------------------------------------------------------------------------------------
const getDataAPI_destinations = async (idDestino) => {
  const response = await fetch(`https://api-node-viajes.vercel.app/destinations/id/${idDestino}`);
  const findDestination = await response.json();
  return findDestination[0];
};
//----------------------------------------------------------------------------------------------------------
    const numeroDestinosComprados = userCero.destination.length;
    const numeroDestinosTotal = user.destination.length;

    const numeroActividadesCompradas = userCero.activity.length;
    const numeroActividadesTotal = user.activity.length;
//----------------------------------------------------------------------------------------------------------
useEffect(() => {
  const getDestinos = async () => {
    const dest =[];
    for(let i=0; i<numeroDestinosTotal; i++){
      dest.push(await getDataAPI_destinations(user.destination[i]));
    }
    setDestinos(dest);
  }
  getDestinos();
}, []);
//------------------------------

//----------------------------------------------------------------------------------------------------------
  const renderDestinos = () => {
    return destinos.map( (dest, i) => (
        <li key={i}>
          <div>
            <p>{dest.destinationPlace}</p>
            <p>Precio: {dest.destinationPrice}€</p>
          </div>
        </li>
    ));
  };
//----------------------------------------------------------------------------------------------------------
  return (
    <>
    <div>ResumenCompra</div>
    <div>


        <div>Destinos comprados anteriormente:{numeroDestinosComprados}</div>
        <div>Destinos en la cesta:{numeroDestinosTotal-numeroDestinosComprados}</div>
        <div>Actividades compradas anteriormente:{numeroActividadesCompradas}</div>
        <div>Actividades en la cesta:{numeroActividadesTotal-numeroActividadesCompradas}</div>
    </div>
    <section>{renderDestinos()}</section>
    {/* <section>{renderActividades()}</section>; */}
    </>
  ) 
}

export default ResumenCompra