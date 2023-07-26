import {Link} from 'react-router-dom'
import '../../styles/Dropdown/main.css'
import { FaUserCircle } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import {FaRegCreditCard} from "react-icons/fa";
import {FaAngleDown} from "react-icons/fa";
const UserMenu = ({user}) => {
    return (
        <div className="dropdown">
        <button type="button" className="dropdown_button">
            <div className="content">
                <FaUserCircle className='user_circle'/>
                <p>{user != null ? user.username : "Account"}</p>
                <FaAngleDown className='arrow_down'/>
            </div>
        </button>

        <ul className="menu">

            <Link to="#">

                <li><FaCog className='settings_cog'/>Settings</li>
            </Link>

            <Link to="#">
                <li><FaRegCreditCard/>Payments</li>
            </Link>
            <Link to="#">
                
            </Link>
        </ul>
    </div>
    )
}

export default UserMenu;