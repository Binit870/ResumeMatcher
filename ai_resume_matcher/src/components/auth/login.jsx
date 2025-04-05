// src/components/auth/Login.jsx
import React from 'react';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 px-4 rounded-lg border-[4px] border-white shadow-xl w-[400px] h-[350px] flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl font-bold mb-4 text-white ">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-900">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-900">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-30 bg-purple-400 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md text-sm transition duration-200 ease-in-out mx-auto block my-4"
            >
            Login
        </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
