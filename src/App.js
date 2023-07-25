import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import userContext from "./components/Context/userContext";
import Home from "./components/Home/Home";
import Destinos from "./components/Destinos/Destinos";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import DetalleDestino from "./components/Destinos/DetalleDestino";
import NotFound from "./components/NotFound";
import Registro from "./components/Registro/Registro";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Logout";
import LoginNote from "./components/LoginNote";
import Carrousel from "./components/Carrousel/Carrousel";
import UserMenu from './components/Dropdown/UserMenu';
import Actividades from "./components/Actividades/Actividades";
import {API} from './services/api';
import DetalleActividad from "./components/Actividades/DetalleActividad";
import ChangePassword from "./components/ChangePassword/changePassword";
import AñadidoCesta from "./components/Profile/AñadidoCesta";
import ConfirmarCompra from "./components/ConfirmarCompra/confirmarCompra";
import Admin from './components/Admin/Admin';
import AdminPost from "./components/Admin/Post/AdminPost";
import AdminUsers from  "./components/Admin/AdminUsers/AdminUsers"







function App() {
  const navigate = useNavigate();
  // traigo los datos de los usuarios de la DB--------------
  // const [userList, setUserList] = useState([]);

  // const getDataUsersAPI = async () => {
  //   const response = await fetch("https://api-frutas.vercel.app/users");
  //   const res = await response.json();
  //   setUserList(res);

  // };
  // useEffect(() => {
  //   getDataUsersAPI();
  // }, []);
  //console.log(userList);
  //-----------------------------------
  // primer estado del user es null, aún no está definido
  const [user, setUser] = useState(null);


  const [loginError, setLoginError] = useState("");

    const loginUser = (formData, prevRoute)=>{
    //Este find es para cuando hacemos consultas a userList
    try {
       API.post('/users/login', formData)
      .then((res)=>{
      console.log(res.data);
      setUser(res.data.userInfo);//Ahora variamos la variable de estado user
      sessionStorage.setItem('token', JSON.stringify(res.data));//Guardamos todo: token y UserInfo
      // navigate(prevRoute || "/")
      // navigate("/")
      });
    } catch (error) {
      setLoginError(error)
      console.log(loginError)
      
    }
  };
  
  
  return (
    <>
      <div className="App">

      <userContext.Provider value={{user, setUser}}>
        <header className="div_header">
          <div className="logo_container">
            <img src="https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg" alt="not working" />
          </div>
          <NavBar  />
          <UserMenu/>
        </header>
        

        {/* <Routes>
          <Route path="/profile" element="" />
          <Route path="*" element={<LoginNote user={user} />} />
        </Routes> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrousel" element={<Carrousel />} />
          <Route
            path="/login"
            element={<Login loginUser={loginUser} loginError={loginError} />}
          />
          <Route path="/logout" element={<Logout setUser={setUser} />} />
          
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/destinos/:idDestino" element={<DetalleDestino />} />

          <Route path="/actividades" element={<Actividades />} />
          <Route path="/actividades/:idActividad" element={<DetalleActividad/>} />
          <Route path="/añadidoCesta" element={<AñadidoCesta/>} />
          <Route path="/confirmarCompra" element={<ConfirmarCompra/>} />



          <Route path="/register" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/changepsw" element={<ChangePassword />} />
          

          <Route
            path="/profile"
            element={
              <AuthRoute user={user} component={<Profile user={user} />} />
            }
          />
           <Route path="/admin" element={<Admin />} />


<Route path="/admin/Home" element={<Admin/>} />
<Route path="/admin/usuarios" element={<AdminUsers />} />
<Route path="/admin/post" element={<AdminPost />} />
          {/*<Route path="/infouser" element={<UserInfo/>} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </userContext.Provider>
      </div>
      <Footer />
    </>
  );
}

export default App;
