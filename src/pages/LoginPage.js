import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    // Mock API call for login
    console.log('Login form data:', formData);
    // Redirect to home page on successful login
    navigate('/');
  };

  const fields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <div>
      <h1>Login</h1>
      <Form fields={fields} onSubmit={handleLogin} />
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
