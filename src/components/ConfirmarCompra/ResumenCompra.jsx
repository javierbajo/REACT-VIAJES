import React, { useEffect, useState } from 'react'
import userContext from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const ResumenCompra = () => {

    const {user, userCero} = useContext(userContext);
    const [destinos, setDestinos] = useState([]);
    const [actividades, setActividades] = useState([]);
//----------------------------------------------------------------------------------------------------------
const getDataAPI_destinations = async (idDestino) => {
  const response = await fetch(`https://api-node-viajes.vercel.app/destinations/id/${idDestino}`);
  const findDestination = await response.json();
  return findDestination[0];
};
//----------------------------------------------------------------------------------------------------------
const getDataAPI_activities = async (idActividad) => {
  const response = await fetch(`https://api-node-viajes.vercel.app/activities/id/${idActividad}`);
  const findActivity = await response.json();
  return findActivity[0];
};
//----------------------------------------------------------------------------------------------------------
    const numeroDestinosComprados = userCero.destination.length;
    const numeroDestinosTotal = user.destination.length;
    const numeroDestinosCesta = numeroDestinosTotal - numeroDestinosComprados;


    const numeroActividadesCompradas = userCero.activity.length;
    const numeroActividadesTotal = user.activity.length;
    const numeroActividadesCesta = numeroActividadesTotal - numeroActividadesCompradas;
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
//----------------------------------------------------------------------------------------------------------
useEffect(() => {
  const getActividades = async () => {
    const dest =[];
    for(let i=0; i<numeroActividadesTotal; i++){
      dest.push(await getDataAPI_activities(user.activity[i]));
    }
    setActividades(dest);
  }
  getActividades();
}, []);
//----------------------------------------------------------------------------------------------------------
const destinosComprados = destinos.slice(0,numeroDestinosComprados);
const destinosCesta = destinos.slice(numeroDestinosCesta, numeroDestinosComprados);

const actividadesCompradas = destinos.slice(0,numeroActividadesCompradas);
const actividadesCesta = destinos.slice(numeroActividadesCesta, numeroActividadesCompradas);
//----------------------------------------------------------------------------------------------------------
  const renderDestinosComprados = () => {
    return destinosComprados.map( (dest, i) => (
        <li key={i}>
          <div>
            <p>{dest.destinationPlace}</p>
            <p>Precio: {dest.destinationPrice}€</p>
          </div>
        </li>
    ));
  };
//----------------------------------------------------------------------------------------------------------
const renderDestinosCesta = () => {
  return destinosCesta.map( (dest, i) => (
      <li key={i}>
        <div>
          <p>{dest.destinationPlace}</p>
          <p>Precio: {dest.destinationPrice}€</p>
        </div>
      </li>
  ));
};
//----------------------------------------------------------------------------------------------------------
const renderActividadesCompradas = () => {
  return actividadesCompradas.map( (activ, i) => (
      <li key={i}>
        <div>
          <p>{activ.activityName}</p>
          <p>{activ.activityPlace}</p>
          <p>Precio: {activ.activityPrice}€</p>
        </div>
      </li>
  ));
};
//----------------------------------------------------------------------------------------------------------
const renderActividadesCesta = () => {
  return actividadesCesta.map( (activ, i) => (
      <li key={i}>
        <div>
          <p>{activ.activityName}</p>
          <p>{activ.activityPlace}</p>
          <p>Precio: {activ.activityPrice}€</p>
        </div>
      </li>
  ));
};
//----------------------------------------------------------------------------------------------------------

  return (
    <>
    {/* <div>ResumenCompra</div> */}
    <div>


        <div>Destinos comprados anteriormente:{numeroDestinosComprados}</div>
        <div>Destinos en la cesta:{numeroDestinosTotal-numeroDestinosComprados}</div>
        <div>Actividades compradas anteriormente:{numeroActividadesCompradas}</div>
        <div>Actividades en la cesta:{numeroActividadesTotal-numeroActividadesCompradas}</div>
    </div>
    <h3>DESTINOS ANTERIORMENTE COMPRADOS:</h3>
    <section>{renderDestinosComprados()}</section>
    <h3>ACTIVIDADES ANTERIORMENTE COMPRADAS:</h3>
    <section>{renderActividadesCompradas()}</section>
    <h3>DESTINOS EN LA CESTA:</h3>
    <section>{renderDestinosCesta()}</section>
    <h3>ACTIVIDADES EN LA CESTA:</h3>
    <section>{renderActividadesCesta()}</section>
    </>
  ) 
}

export default ResumenCompra