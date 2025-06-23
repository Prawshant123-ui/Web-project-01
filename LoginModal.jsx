import React, { useState } from 'react';

export default function LoginModal({ onClose, onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Login successful!");
      onClose(); // ✅ Close on success
    } else {
      alert("Please fill in all fields.");
    }
  };

 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-lg">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-orange-600">
          Login to BiteRush
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-full hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        {/* Switch to Signup */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{' '}
          <button
            onClick={() => {
              onClose();
              onSwitchToSignup(); // ✅ trigger signup modal
            }}
            className="text-orange-600 hover:underline font-semibold"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
