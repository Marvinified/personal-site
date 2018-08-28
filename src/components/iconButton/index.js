import React from 'react'
import Button from '../button'
import Icon from '../icon'

const IconButton = ({children, ...rest})=>{
    return(
        <Button {...rest}>
            <Icon>
                {children}
            </Icon>
        </Button>
    )
}

export default IconButton;