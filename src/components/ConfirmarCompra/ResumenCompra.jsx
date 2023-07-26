import React, { useEffect, useState } from 'react'
import userContext from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const ResumenCompra = () => {

    const {user, userCero, allDestinations} = useContext(userContext);
    let destinosPivote = [];
//----------------------------------------------------------------------------------------------------------
    const numeroDestinosComprados = userCero.destination.length;
    const numeroDestinosTotal = user.destination.length;

    const numeroActividadesCompradas = userCero.activity.length;
    const numeroActividadesTotal = user.activity.length;
//----------------------------------------------------------------------------------------------------------
    const getDestinos = () => {
      for(let i=0; i<numeroDestinosTotal; i++){
        
        // for(let j=0; j<allDestinations.length; j++){
        //   if( allDestinations[j]._id == user.destination[i]){
        //     destinosPivote.push(allDestinations[j]);
        //   }
        for(let dest of allDestinations){
          if(dest._id == user.destination[i]) destinosPivote.push(dest);
        }
        }
      }
    
//------------------------------
  getDestinos();
//----------------------------------------------------------------------------------------------------------
  const renderDestinos = () => {
    return destinosPivote.map( (dest, i) => (
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

        {/* <div>{user.activity[0]}</div> */}
        <div>Destinos comprados anteriormente:{numeroDestinosComprados}</div>
        <div>Destinos en la cesta:{numeroDestinosTotal-numeroDestinosComprados}</div>
        <div>Actividades compradas anteriormente:{numeroActividadesCompradas}</div>
        <div>Destinos en la cesta:{numeroActividadesTotal-numeroActividadesCompradas}</div>
    </div>
    <section>{renderDestinos()}</section>
    {/* <section>{renderActividades()}</section>; */}
    </>
  ) 
}

export default ResumenCompra