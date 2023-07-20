import {Link} from 'react-router-dom'
import "../../styles/NavBar.css"


const NavBar = ({user}) => {


  
  return (
    
      <nav className="nav">
        <ul className="menu">
          <li>
            <Link to="/" className="lis">Home</Link>
          </li>
          <li>
            <Link to="/frutas" className="lis">Frutas</Link>
          </li>
          {user ?
          <li>
            <Link to="/logout" className="lis" >Logout</Link>
          </li>:
              <li>
              <Link to="/login" className="lis">Login</Link>
            </li>}
          <li>
            <Link to="/contact" className="lis">Contacto</Link>
          </li>
          {/* {user ?
          <li>
            <Link to="/profile" className="lis">Perfil</Link>
          </li> :''
          } */}
        </ul>
      </nav>
    
  )
}

export default NavBar

