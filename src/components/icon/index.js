import React from 'react'
import './style.css';

const Icon = ({children, ...rest}) =>{
    return (
        <i className="material-icons" {...rest} >{children}</i>
    )
}

export default Icon;