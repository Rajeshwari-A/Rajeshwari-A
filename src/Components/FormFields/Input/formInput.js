import React from 'react';
import './formInput.css';


const InputField = ({ id, value, label, name, placeholder, type, className, onChange, onBlur,
     maxLength, min, max, ref, error, readOnly }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        // onChange(value);
    }

    return (
        <React.Fragment>
            {label && <label className="input-label" htmlFor="input-field">{label}</label>}
            <input
                id={id}
                maxLength={maxLength}
                type={type}
                value={value}
                name={name}
                className={`${type === 'checkbox' ? `form-checkbox ${className}` : `form-input ${className}`}`}
                placeholder={placeholder}
                onChange={handleChange}
                autoFocus=""
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                min={min}
                max={max}
                readOnly={readOnly}
            />
        </React.Fragment>
    )

}

export default InputField;