import React from 'react';

function Input({ label, placeholder, type }) {
  return (
    <div className="form-group">
      <label for={type}>{label}</label>
      <input type={type} className="form-control" id="" placeholder={placeholder}/>
    </div>
  );
}

export default Input;
