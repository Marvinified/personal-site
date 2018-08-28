import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import './style.css'
class Nav extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav> 
                    <Link to="/portfolio">PORTFOLIO</Link>    
                    <Link to="/about">ABOUT ME</Link>    
                    <Link to="/hire">HIRE ME</Link>    
            </nav>
        )
    }
}
export default Nav;