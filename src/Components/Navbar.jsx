import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className=" bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Task Manager</div>
        
      </div>
    </nav>
  );
};

export default Navbar;
