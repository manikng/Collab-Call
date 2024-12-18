import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; // Ensure this path is correct
import Home from "./pages/Home"; // Ensure this path is correct
import Discover from "./pages/Discover"; // Ensure this path is correct
import Sidebar from "./components/Sidebar"; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </Router>
  );
};

// import React from 'react';
// import Navbar from './components/Navbar';
// import Breadcrumb from './components/Breadcrumb';
// import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeaturesSection';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Breadcrumb />
//       <HeroSection />
//       <FeaturesSection />
//       <Footer />
//     </>
//   );
// };

// export default App;
// export default App;