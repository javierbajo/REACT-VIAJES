import React, { useEffect, useState } from 'react';
import './AdminUsers.css'; 

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api-node-viajes.vercel.app');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGoBack = () => { // Cambia el nombre de la función para que coincida con tu botón
    window.history.back();
  };

  return (
    <div className="container">
      <button onClick={handleGoBack} className="goBackButton">Volver atrás</button> {/* Aquí se agrega el botón */}
      {users
        .filter(user => user.actividades.length > 0 || user.destinos.length > 0) 
        .map((user, index) => (
          <div key={index} className="rounded-card">
            <p>{user.name}</p>
          </div>
      ))}
      
    </div>
  );
}

export default AdminUsers;
