import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import logo from './assets/logo-2.png';
import SignupModal from './SignupModal.jsx';
import LoginModal from './LoginModal.jsx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // ✅ for Login modal

  return (
    <>
      <nav className="bg-[#fef1e6] shadow-md px-6 py-3">
        <div className="flex justify-between items-center max-w-7xl mx-auto">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="BiteRush Logo" className="w-10 h-10 rounded-full object-cover" />
            <h2 className="text-3xl font-semibold text-orange-600">BiteRush</h2>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-base font-medium text-orange-600">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'font-bold text-orange-700' : ''}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold text-orange-700' : ''}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold text-orange-700' : ''}>
              Contact
            </NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setShowLogin(true)}
              className="px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-200"
            >
              Login
            </button>
            <button
              onClick={() => setShowSignup(true)}
              className="px-5 py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition duration-200"
            >
              Signup
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-orange-600 focus:outline-none"
            >
              {menuOpen ? '❌' : '🍔'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-3 text-center text-orange-600 font-medium">
            <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'block font-bold text-orange-700' : 'block'}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'block font-bold text-orange-700' : 'block'}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'block font-bold text-orange-700' : 'block'}>
              Contact
            </NavLink>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setShowLogin(true);
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-200"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowSignup(true);
                  setMenuOpen(false);

                }}
                className="w-full px-4 py-2 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition duration-200"
              >
                Signup
              </button>
            </div>
          </div>
        )}
      </nav>

{/* Modals */}
{showSignup && (
  <SignupModal
    onClose={() => setShowSignup(false)}
    onSuccess={() => {
      setShowSignup(false);
      setShowLogin(true); // ✅ open login after signup
    }}
  />
)}
{showLogin && (
  <LoginModal
    onClose={() => setShowLogin(false)}
    onSwitchToSignup={() => {
      setShowLogin(false);
      setShowSignup(true); // ✅ open signup from login
    }}
  />
)}

    </>
  );
};

export default Navbar;