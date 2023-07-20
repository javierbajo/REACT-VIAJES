import React from 'react'

const profile = ({user}) => {
  return (
    <>
    <h1>perfil de usuario: </h1>
    <p>Email:{user.email}</p>
    <p>Nombre:{user.userName}</p>
    <p>Apellido:{user.userLastname}</p>
    <p>Dirección:{user.adress}</p>
    {/* <p>Frutas:{user.fruits}</p> */}
    </>
  )
}

export default profile