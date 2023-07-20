import React from 'react'
import '../../styles/Contacto.css'

const Contacto = () => {
  return (
    <form className='contacto-form'>
      <label htmlFor="">Nombre</label>
      <input type="text" /> <br />

      <label htmlFor="">Comentario</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      
      
      </form>
  )
}

export default Contacto