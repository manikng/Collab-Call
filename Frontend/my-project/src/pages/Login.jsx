// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });
//       localStorage.setItem('token', response.data.token); // Store token in local storage.
//       navigate(`/home?userId=${response.data.userId}`); // Redirect with userId.
//     } catch (error) {
//       alert('Login failed');
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin} className="p-4">
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-2" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 mb-2" required />
//       <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
//     </form>
//   );
// };

// export default Login;