// pages/Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log(response.data); // Handle token or success message
    } catch (error) {
      console.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
