import React from 'react';
import { NavLink } from 'react-router-dom';

function Menubutton() {
  return (
    <div className="text-center my-6">
      <NavLink to="/menu">
        <button className="bg-white hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 border border-orange-600"
        onClick={() => alert('Sign up to see our menu')}>
          View Menu →
        </button>
      </NavLink>
    </div>
  );
}

export default Menubutton;
