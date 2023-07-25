import userContext from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import '../../styles/BtnLoQuiero.css';

const BtnLoQuiero = ({ tipoProducto, idProducto }) => {

    const { user, setUser } = useContext(userContext);


    const navigate = useNavigate();

    const addProduct = () => {
        const userPivote = user;
        userPivote[tipoProducto].push(idProducto);
        setUser(userPivote);
        navigate("/añadidoCesta");
        console.log(user);
    }

    const goToLogin = () => {
        navigate("/login");
    }
    const goToCesta = () => {
        navigate("/confirmarCompra");
    }
    // const info = () => {
    //     navigate("/infoDatosPersonales");
    // }

    return (
        <>
            <div className="BtnLoQuiero-div">
                {user ?
                    <div>

                        <button className="BtnLoQuiero-btn" onClick={addProduct}
                        >Lo quiero</button>

                        <button className="BtnLoQuiero-btn" onClick={goToCesta}
                        >Vé a tu cesta</button>
                    </div>
                    :
                    <button className="BtnLoQuiero-btn" onClick={goToLogin}
                    >Si lo quieres, logéate!</button>
                }
                 {/* <button className="BtnLoQuiero-btn" onClick={info}
                        >ir a info</button> */}
            </div>


        </>
    )
}

export default BtnLoQuiero