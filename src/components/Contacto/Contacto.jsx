import React, { useRef} from 'react';
import '../../styles/Contacto/Contacto.css';
import emailjs from '@emailjs/browser';


const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2zfnijr', 'template_1qyko6a', form.current, 'WD4OVH6ubbz0jxDRK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return ( 
   <><section className='container'>
   <h2>Contacto</h2>
   <h3>¿En qué podemos ayudarte?</h3>
   <p>Si tienes cualquier duda sobre tu compra o consulta sobre nuestros servicios,envianos tu consulta y nosotros nos pondremos en contacto contigo.</p>
   <h3>Puedes enviarnos tu consulta a través de este formulario</h3>
  <form ref={form} onSubmit={sendEmail} className='field'>
  
    <label>Name</label>
    <input type="text" name="user_name" placeholder='Escribe tu nombre'/>
    <label>Email</label>
    <input type="email" name="user_email" placeholder='Escribe tu email'/>
    <label>Message</label>
    <textarea name="message" placeholder='Escribe tu consulta'/>
    <div className='checkbox'>
  <input type="checkbox"/>Quiero que me enviéis novedades y ofertas de Viajes.net.
</div>
    <input type="submit" value="Send" />
  </form>
 
  </section>
  </>
  );
};

export default Contacto;