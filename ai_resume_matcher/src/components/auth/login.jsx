// src/components/auth/Login.jsx
import React from 'react';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page from reloading
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email);
    console.log("Password:", password);
    // TODO: Login logic goes here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-4 w-[300px] border-[5px] border-white shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 rounded-md">
        <h1 className="text-white text-center text-lg font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="block text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded px-2 py-1 text-black"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block text-white mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full rounded px-2 py-1 text-black"
            />
          </div>
          <button type="submit" className="w-full bg-white text-blue-700 font-semibold py-1 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
