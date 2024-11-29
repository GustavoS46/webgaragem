import React from 'react';

const Button = ({ className = '', children, ...props }) => {
  return (
    <button
      className={`md:px-6 md:py-4 py-2.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition flex items-center gap-2 group ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
