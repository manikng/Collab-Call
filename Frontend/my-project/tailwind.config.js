/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./Frontend/my-project/index.html", // Include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  
  plugins: [],
}

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}