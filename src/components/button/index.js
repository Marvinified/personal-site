import React, {Fragment} from 'react';
// import {primaryColor, errorColor, defaultColor} from '../colors'
import './style.css'
const primaryColor = '#2CAEF9';
const defaultColor = '#21252B';
const errorColor = '#c00'



const  Button = ({children, rounded, flat, outlined, curved, extended, style, color, link, className,  ...rest})=>{
    const {disabled} = rest
    className += ' buttonified'
    // check for defaul colors
    switch(color){
        case 'primary':
            color = primaryColor
            break;
        case 'error':
            color = errorColor
            break;
        case 'default':
            color = defaultColor
            break;
    }

    const styleProps = {
        color: (outlined || flat) && color,
        ...style,
        cursor: (disabled && 'not-allowed'),
        backgroundColor: ((!outlined && !flat) && (color || style && style.backgroundColor)) && (color || style && style.backgroundColor)  ,

    }
    
    // check for design props
    if(extended){className += ' extended'}
    if(rounded){className += ' rounded'}
    if(flat){className += ' flat'}
    if(outlined){className += ' outlined'}
    if(curved){className += ' curved'}

    const Button = ()=> (
        <button  className={className} style={styleProps} {...rest} >
            {children}
        </button>
    ) 

    return(
        <Fragment>
            {
                // if link props is present
                link ?  <a href={!disabled?link:undefined}>
                            <Button />
                        </a> 
                    :  <Button />
            }
        </Fragment>  
        
    )
}

export default Button