import {Link} from 'react-router-dom'
import '../../styles/Dropdown/main.css'
import { FaUserCircle } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import {FaRegCreditCard} from "react-icons/fa";
import {FaAngleDown} from "react-icons/fa";
const UserMenu = () => {
    return (
        <div className="dropdown">
        <button type="button" className="dropdown_button">
            <div className="content">
                <FaUserCircle className='user_circle'/>
                <p>Account</p>
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
                <li><span className="fa-solid fa-box-archive"></span>Archive</li>
            </Link>
        </ul>
    </div>
    )
}

export default UserMenu;