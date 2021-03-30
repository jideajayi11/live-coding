import React from 'react';

function Button({ type, className, name }) {
  return (
    <button type={type} className={className}>{name}</button>
  );
}

export default Button;
