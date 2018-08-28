import React from 'react'
import './style.css'

const TextField =  ({label, style, curved, flat, lined, type, className, name, onChange, ...rest}) =>{
    
    let labelOpacity = null
    let labelNode = null;
    let mainClassName = 'inputified'

    function changeHandler(e){
        if (!curved && !flat){
            if(e.target.value)
                labelNode.style.opacity = 1
            else
                labelNode.style.opacity = null
        }
        onChange && onChange(e)
    }
    const labelStyleProps ={
        opacity:labelOpacity, 
        color:(style && style.color)?style.color:null
    }

        
    if(curved){mainClassName+=' curved'}
    if(flat){mainClassName += ' flat'}

    return(
        <div className={mainClassName}>
            <label ref={(node)=>labelNode=node}  style= {labelStyleProps} htmlFor="input">{rest.placeholder}</label>
            <div className={className} style={style}>
                <input id='input' onChange={changeHandler} name={name} type={type || 'text'} {...rest} />
            </div>
        </div>
    )
}

export default TextField
