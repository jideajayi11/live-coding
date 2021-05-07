import React from 'react';

const Button = ({ type, className, name }) => {
  return (
    <button type={type} className={className}>{name}</button>
  );
}

export default Button;
