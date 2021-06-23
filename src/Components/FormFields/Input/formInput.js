import React from 'react';
import './formInput.css';


const InputField = ({ id, value, label, name, placeholder, type, className, onChange, maxLength, ref }) => {

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
                className={`${className ? className : type === 'checkbox' ? 'form-checkbox' : 'form-input'}`}
                placeholder={placeholder}
                onChange={handleChange}
                autoFocus=""
                ref={ref}
                onChange={onChange}
            />
        </React.Fragment>
    )

}

export default InputField;