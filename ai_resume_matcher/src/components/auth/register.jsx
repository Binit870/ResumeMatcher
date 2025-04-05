import React from 'react';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // TODO: Registration logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="p-4 w-96 border-[5px] border-white shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 rounded-md w-[450px] h-[400px] flex flex-col justify-center items-center">
        <h1 className="text-white text-center text-3xl font-bold mb-4 mt-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block text-white mb-1">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full rounded px-2 py-1 text-black"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded px-2 py-1 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full rounded px-2 py-1 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="mx-auto block bg-purple-400 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded text-sm transition duration-200 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
