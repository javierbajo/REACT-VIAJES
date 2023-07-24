import userContext from '../Context/userContext';
import { useContext } from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/BtnLoQuiero.css';

const BtnLoQuiero = ({tipoProducto, idProducto}) => {

const {user, setUser} = useContext(userContext);


const navigate = useNavigate();

const addProduct = () =>{
    const userPivote = user;
    userPivote[tipoProducto].push(idProducto);
    setUser(userPivote);
    navigate("/");
    console.log(user);
}



  return (
   <div className="BtnLoQuiero-div">
    {user ?
    <button className="BtnLoQuiero-btn" onClick={addProduct}
    >Lo quiero</button>
    :
    <div>

    <p>{tipoProducto}</p>
    <p>{idProducto}</p>
    </div>
    }
   </div>

  )
}

export default BtnLoQuiero