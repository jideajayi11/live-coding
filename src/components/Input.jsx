import React from 'react';

const Input = ({
  label,
  placeholder,
  type = 'text',
  labelFor,
  divClass = '',
  labelClass = '',
  inputClass = 'form-control',
  checked = ''
}) => {
  return (
    <div className={`form-group ${divClass}`}>
      {
        type !== 'checkbox' &&
          <label className={labelClass} htmlFor={labelFor}>{label}</label>
      }
      <input type={type} className={inputClass} placeholder={placeholder} checked={checked} />
      {
        type === 'checkbox' &&
          <label className={labelClass} htmlFor={labelFor}>{label}</label>
      }
    </div>
  );
}

export default Input;
