import React from 'react';
import AddPost from './AddPost/AddPost';
import DeletePost from './DeletePost/Delete';
import './AdminPost.css';

function AdminPost() {
  const handleGoBack = () => {
    window.history.back();
  }

  return (
    <div className="AdminPost">
      <h2>Administración de publicaciones</h2>
      <div className="AddPost">
        <AddPost />
      </div>
      <div className="DeletePost">
        <DeletePost />
      </div>
      <button onClick={handleGoBack}className="goBackButton">Volver atrás</button>
    </div>
  );
}

export default AdminPost;




