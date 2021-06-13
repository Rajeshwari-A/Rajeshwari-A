import React from 'react';
import './formInput.css';


const InputField = ({ id, value, label, name, placeholder, type, className, onChange }) => {

    const handleChange = (e) => {
        const { value } = e.target;
        // onChange(value);
    }

    return (
        <React.Fragment>
            {label && <label className="input-label" htmlFor="input-field">{label}</label>}
            <input
                id={id}
                type={type}
                value={value}
                name={name}
                className={`${className ? className : type === 'checkbox' ? 'form-checkbox' : 'form-input'}`}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </React.Fragment>
    )

}

export default InputField;