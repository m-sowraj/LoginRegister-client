// components/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        // Adjust the URL based on your backend API endpoint
        let response = await axios.post('http://localhost:3001/login', credentials);
        if(response.data.role == 'admin'){
            localStorage.setItem('Login', 'True');
            navigate('/display');
        }
      } catch (error) {
        console.error('Invalid Credintials');
        alert(`Invalid Credintials`);
      }
  };

  return (
    <div className="login-container">
      
      <form onSubmit={handleLogin} className="login-form">
      <h2>Admin Login</h2>
        <label>
          ID:
          <input type="text" name="id" value={credentials.id} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={credentials.password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
