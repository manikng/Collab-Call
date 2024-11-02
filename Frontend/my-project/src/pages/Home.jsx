import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get('userId');

  return (
    <div className="p-4">
      <h1>Welcome User {userId}</h1>
      {/* Add form logic to create new projects here */}
      <button>Create New Project</button>
      {/* Logic to handle project creation goes here */}
    </div>
  );
};

export default Home;