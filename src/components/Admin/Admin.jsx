import { Routes, Route, Link } from 'react-router-dom';
import AdminUsers from './AdminUsers/AdminUsers';
import AdminPost from './Post/AdminPost'
import './Admin.css';
import './Button.css';

function Admin() {
  return (
    <div className="admin-container">
      <h1>Página de Administrador</h1>

      <Routes>
      <Route path="/Home" element={<Admin/>} />
        <Route path="/usuarios" element={<AdminUsers />} />
        <Route path="/Home/post" element={<AdminPost />} />

      </Routes>
      
      <div className="botones-contenedor">
      <Link to="/admin/home" className="button">Home</Link>
      <Link to="/admin/usuarios" className="button">Usuarios</Link>
      <Link to="/admin/post" className="button">Post</Link>
      </div>
    </div>
  );
}

export default Admin;