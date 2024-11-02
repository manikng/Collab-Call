import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Discover = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-4">
      <h1>Discover Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="border p-2 my-2">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Discover;