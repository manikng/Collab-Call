import React from 'react';
// import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white h-full w-64">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/thread-workspace">Thread Workspace</Link></li>
        <li><Link to="/projects">Discover Projects</Link></li> {/* Add link to Discover Projects */}
      </ul>
    </nav>
  );
};

export default Sidebar;