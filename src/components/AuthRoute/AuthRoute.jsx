import React from 'react';
import { Navigate } from "react-router-dom";

const AuthRoute = ({user, component}) => {

    // si existe el usuario, retorno el componente que corresponde a la web que quiero renderizar   
    if(user) return component;

    // en caso de que el user sea false te manda al login
    if(!user) return <Navigate to="/login" />

}

export default AuthRoute