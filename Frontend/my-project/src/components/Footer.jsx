// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Add footer content here */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Collab Call. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;