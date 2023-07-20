import { useState } from "react";
import '../../styles/Register.css';

const intialState = {
  email: "",
  password: "",
  userName: "",
  userLastname: "",
  adress: "",
  fruits: [],
};

const Registro = () => {
  // ************************************************************
  const getDataUsersAPI = async () => {
    /*
    const response = await fetch("http://localhost:3001/users/");
    const res = await response.json();
    */
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        formData
      ),
    });
    const res = await response.json();
    console.log(res);
  };

  // ************************************************************

  const [formData, setFormData] = useState(intialState);

  const changeInput = (event) => {
    //OTRA FORMA DE PONER LO MISMO
    /* const nombreInput = event.target.name; 
        const valorInput = event.target.value;
        setFormData({...formdata, [nombreInput]: valorInput});*/
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const submitForm = (event) => {
    event.preventDefault();

    //loginUser(formData);

    //useEffect(() => {
    getDataUsersAPI();
    console.log("Se han enviado los datos");
    setFormData(intialState);

    //}, []);
  };

  return (
    <div className="register-contenedor">
      <div className="register-contenedor-centrado">
        <div className="register-div-izquierdo">
          <form onSubmit={submitForm} className="login-form" >
            {/* RETO: METER LOS INPUT COMO UN COMPONENTE DESDE UN FICHERO, COMO EN TESTIMONIOS */}
            <label htmlFor="email">Email</label>
            <input
              className="register-input-email"
              type="email"
              name="email"
              placeholder="email"
              id="email"
              onChange={changeInput}
              value={formData.email}
            />
            <label htmlFor="userName">Nombre</label>
            <input
              className="register-input-nombre"
              type="name"
              name="userName"
              placeholder="nombre"
              id="userName"
              onChange={changeInput}
              value={formData.userName}
            />
            <label htmlFor="userLastname">Apellido</label>
            <input
              className="register-input-apellido"
              type="name"
              name="userLastname"
              placeholder="apellido"
              id="userLastname"
              onChange={changeInput}
              value={formData.userLastname}
            />
            <label htmlFor="adress">Dirección</label>
            <input
              className="register-input-dirección"
              type="name"
              name="adress"
              placeholder="dirección"
              id="adress"
              onChange={changeInput}
              value={formData.adress}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              className="register-input-password"
              type="password"
              name="password"
              placeholder="password"
              id="password"
              onChange={changeInput}
              value={formData.password}
            />

            <button type="submit" className="register-button">
              Enviar
            </button>
          </form>
        </div>

        <div className="register-div-derecho">

          <hr />
         
          <div className="login-div-titulo">Regístrate con nosotros!</div>
            <hr />
       
        </div>
      </div>
    </div>
  );
};

export default Registro;
