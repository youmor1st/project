import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    // Mock API call for registration
    console.log('Register form data:', formData);
    // Redirect to the email confirmation page
    navigate('/confirm-email');
  };

  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <div>
      <h1>Register</h1>
      <Form fields={fields} onSubmit={handleRegister} />
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
