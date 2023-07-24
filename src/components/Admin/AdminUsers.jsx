import React, { useEffect, useState } from 'react';
import './Admin.css'; 

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

  return (
    <>
      {users
        .filter(user => user.actividades.length > 0 || user.destinos.length > 0) // Filtro usuarios que tengan actividades o destinos
        .map((user, index) => (
          <p key={index}>{user.name}</p>
      ))}
    </>
  );
}

export default AdminUsers;
