import React, { useState } from 'react';

export default function SignupModal({ onClose, onSuccess }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
    } else {
      alert('Signup successful!');
      onClose(); // close signup
      onSuccess(); // open login
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
          Sign Up Here
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none" />
          <input type="text" placeholder="Username" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none" />
          <input type="email" placeholder="Email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none" />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none" />
          <input type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none" />

          <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-2 rounded-full hover:bg-orange-600 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
