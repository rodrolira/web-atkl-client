import React from 'react';
import './Button.css'

const Button = ({ href, onClick, children, className }) => {
  return (
    <div className='h-full mx-2'>
      <a
        href={href}
        rel='noopener noreferrer'
        onClick={onClick}
        className={`h-full text-white font-medium rounded-lg text-sm inline-flex items-center ${className}`}
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
