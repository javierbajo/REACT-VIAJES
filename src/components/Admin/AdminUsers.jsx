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

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <button onClick={goBack} className="go-back-btn">Go Back</button>
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

