import React, { useState } from 'react';

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
  const [ value, setValue ] = useState('');

  return (
    <div className={`form-group ${divClass}`}>
      {
        type !== 'checkbox' &&
          <label className={labelClass} htmlFor={labelFor}>{label}</label>
      }
      <input
        type={type}
        className={inputClass}
        placeholder={placeholder}
        checked={checked}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      {
        type === 'checkbox' &&
          <label className={labelClass} htmlFor={labelFor}>{label}</label>
      }
    </div>
  );
}

export default Input;
