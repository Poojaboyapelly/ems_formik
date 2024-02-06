// Signup.js 
import React from 'react';

const Signup = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send signup request to the server
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
