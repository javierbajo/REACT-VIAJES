import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Frutas from "./components/Frutas/Frutas";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import DetalleFrutas from "./components/DetalleFrutas/DetalleFrutas";
import NotFound from "./components/NotFound";
import Registro from "./components/Registro/Registro";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Logout";
import LoginNote from "./components/LoginNote";

function App() {
  const navigate = useNavigate();
  // traigo los datos de los usuarios de la DB--------------
  const [userList, setUserList] = useState([]);

  const getDataUsersAPI = async () => {
    const response = await fetch("http://localhost:3001/users/");
    const res = await response.json();
    setUserList(res);
  };
  useEffect(() => {
    getDataUsersAPI();
  }, []);
  //console.log(userList);
  //-----------------------------------
  // primer estado del user es null, aún no está definido
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  const loginUser = (formData) => {
    const existUser = userList.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (existUser) {
      // Segundo estado del user, información del usuario logado
      setUser(existUser);
      setLoginError("");
      navigate("/");
    } else {
      // tercer estado del user, usuario no encontrado
      setUser(false);
      setLoginError("Usuario o contraseña incorrecta");
    }
  };

  return (
    <>
      <div className="App">
        <div className="contenedor-principal">
          <header>
            <div>
              <h1> JAVIWEB DE LA FRUTA </h1>
            </div>
            <NavBar user={user} setUser={setUser} />
          </header>

        <Routes>
          <Route path="/profile" element=""/>
          <Route path="*" element= {<LoginNote user={user}/>} />
        </Routes>
          



          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login loginUser={loginUser} loginError={loginError} />}
            />
            <Route path="/logout" element={<Logout setUser={setUser}/>} />
            <Route path="/frutas" element={<Frutas />} />
            <Route path="/contact" element={<Contacto />} />
            <Route path="/frutas/:fruitName" element={<DetalleFrutas />} />
            <Route path="/register" element={<Registro />} />

            <Route
              path="/profile"
              element={
                <AuthRoute user={user} component={<Profile user={user} />} />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
