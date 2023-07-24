import React from 'react'
import userContext from '../Context/userContext';
import { useContext } from 'react';


const ConfirmarCompra = () => {

    const {user, setUser} = useContext(userContext);
    const sessionToken = JSON.parse(sessionStorage.getItem('token'));
  
    setUser({ ...user, ['password']: '' });
  
    console.log(user);
    
      const updateDataUsersAPI = async () => {
        
        const response = await fetch(`https://api-node-viajes.vercel.app/users/update/${user._id}`, {
          method: "PUT",
          headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: {
            toString() {
            return `Bearer ${sessionToken.token || null}`;
      },
    },
          },
          body: JSON.stringify(
            user
          ),
        });
        const res = await response.json();
        console.log(res);
        
      };

      const changeInput = (event) => {
    
        const { value, name } = event.target;
        setUser({ ...user, [name]: value });
        //console.log(formData);
      };

      const submitForm = (event) => {
        event.preventDefault();
        updateDataUsersAPI(user);
        alert("Compra realizada");
      };
  
  
    return (
  
      <div className="register-contenedor">
        <div className="register-contenedor-centrado">
          <div className="register-div-izquierdo">
            <form onSubmit={submitForm} className="login-form" >
              



          <label htmlFor="password">Contraseña</label> 
             <input
              className="register-input-password"
              type="password"
              name="password"
              placeholder="password"
              id="password"
              onChange={changeInput}
              value=''
            />


              <button type="submit" className="register-button">
                Confirmar compra
              </button>
            </form>
          </div>
  
          <div className="register-div-derecho">
  
            <hr />
           
            <div className="login-div-titulo">Confirmar compra de la cesta</div>
              <hr />
         
          </div>
        </div>
      </div>
    )

}



export default ConfirmarCompra