import React from 'react';
import AddPost from './AddPost';
import DeletePost from './Delete';

function AdminPost() {
  return (
    <div>
      <h2>Administración de publicaciones</h2>
      <AddPost />
      <DeletePost />
    </div>
  );
}

export default AdminPost;


