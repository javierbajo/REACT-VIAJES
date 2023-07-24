import { Routes, Route, Link } from 'react-router-dom';
import AdminUsers from './AdminUsers';
import AdminPost from './Post/AdminPost'
import './Admin.css'; 
import './Button.css';

function Admin() {
  return (
    <div className="admin-container">
      <h1>Página de Administrador</h1>
     
      <Routes>
      <Route path="home" element={<Admin/>} />
        <Route path="usuarios" element={<AdminUsers />} />
        <Route path="post" element={<AdminPost />} />
        {/* Nota que el path ahora es "usuarios" en lugar de "/usuarios" */}
      </Routes>
      <div className="botones-contenedor">
      <Link to="home" className="button">Home</Link>
      <Link to="usuarios" className="button">Usuarios</Link>
      <Link to="post" className="button">Post</Link>
      </div>
    </div>
  );
}

export default Admin;

