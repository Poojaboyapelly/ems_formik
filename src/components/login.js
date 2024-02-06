// Login.js (Login component)
import React from 'react';

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send login request to the server
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
