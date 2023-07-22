import React, { useRef} from 'react';
import '../../styles/Contacto.css';
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
  <form ref={form} onSubmit={sendEmail} className='field'>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  );
};

export default Contacto;