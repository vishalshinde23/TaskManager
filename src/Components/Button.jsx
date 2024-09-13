import React from 'react';

const Button = ({ onClick, children, type = "button", color = "blue" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-2 px-4 bg-${color}-600 hover:bg-${color}-700 text-white font-bold rounded-lg transition-all duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
