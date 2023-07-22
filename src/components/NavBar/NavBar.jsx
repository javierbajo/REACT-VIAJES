import {Link} from 'react-router-dom'
import "../../styles/NavBar/main.css"


const NavBar = ({user}) => {

  return (
      <nav className="header_nav">
        <ul className="nav_menu">
          <li>
            <Link to="/" className="nav_menu_li">Home</Link>
          </li>
          <li>
            <Link to="/frutas" className="nav_menu_li">Frutas</Link>
          </li>
          {user ?
          <li>
            <Link to="/logout" className="nav_menu_li" >Logout</Link>
          </li>:
              <li>
              <Link to="/login" className="nav_menu_li">Login</Link>
            </li>}
          <li>
            <Link to="/contacto" className="nav_menu_li">Contacto</Link>
          </li>
          {/* {user ?
          <li>
            <Link to="/profile" className="nav_menu_li">Perfil</Link>
          </li> :''
          } */}
        </ul>
      </nav>
  )
}

export default NavBar

