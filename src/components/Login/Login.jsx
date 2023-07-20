import { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Login.css'

const intialState = {
    email:"",
    password:""
}

const Login = ({ loginUser, loginError }) => {

  const [formData, setFormData] = useState(intialState);

  const changeInput = (event) => {
    //OTRA FORMA DE PONER LO MISMO
    /* const nombreInput = event.target.name; 
        const valorInput = event.target.value;
        setFormData({...formdata, [nombreInput]: valorInput});*/
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
    //console.log(name, value)
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Se han enviado los datos");
    loginUser(formData);
    setFormData(intialState);
  };
  //console.log(formData)

  return (
    <div className="login-contenedor">
      <div className="login-contenedor-centrado">
        <div className="login-div-izquierdo">
          <form className="login-form" onSubmit={submitForm}>
            <label htmlFor="email">Email</label>
            <input
              className="login-input-email"
              type="email"
              name="email"
              placeholder="email"
              id="email"
              onChange={changeInput}
              value={formData.email}
            />

            <label htmlFor="password">Contraseña</label>
            <input
              className="login-input-password"
              type="password"
              name="password"
              placeholder="password"
              id="password"
              onChange={changeInput}
              value={formData.password}
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>

        <div className="login-div-derecho">
          <div className="login-div-titulo">Bienvenido</div>
          <hr />
          <div >
            <Link to="/register" className="login-registro">¿No tienes cuenta? Regístrate</Link>
            {loginError ? <div className="loginError">{loginError} </div> : null}
            <hr />
            <Link to="/" className="login-registro">Volver a home</Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
