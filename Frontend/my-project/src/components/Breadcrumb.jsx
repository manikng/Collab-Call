// src/components/Breadcrumb.jsx
import React from 'react';

const Breadcrumb = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">Home</a>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4"/></svg>
            <span className="text-sm font-medium text-gray-500">Projects</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;