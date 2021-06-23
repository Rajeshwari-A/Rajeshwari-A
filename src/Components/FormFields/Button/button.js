import React from 'react';
import './button.css';


const Button = ({onClick, className, name, type, disabled}) => {

    const handleClick = (e) => {
        const { value } = e.target;
        // onChange(value);
    }

    return (
        <React.Fragment>
           <button type={type} onClick={handleClick} className={`${className} ${disabled ? 'btn-disabled' : ''}`}>{name}</button>
        </React.Fragment>
    )

}

export default Button;