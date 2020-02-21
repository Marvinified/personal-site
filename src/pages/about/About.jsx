import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Nav, Header, Button, BottomLeft, BottomRight, Icon} from '../../components'
import './style.css'

class About extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="about" >
                <div className="container">
                    <Header />
                    <Nav />
                    <div className="left">
                        <img src={require('../../assets/Avatar.png')} alt=""/>
                        <h1>Marvin Tunji-ola</h1>
                        <Icon>mail</Icon> Marvinified@gmail.com
                        {/* <IconButton rounded outlined  >mail</IconButton> */}
                    </div>
                    <div className="right">
                    <p>
                        I'm Marvin as you may already know, I Love to Code which probably the only thing i'm good at🤠 and to design.
                    </p>
                    <p>
                        Professionally I'm a Full-stack Developer, I work with Javascript and sometimes with Php (though am trying to dump it). I work with both SQL and NOSQL Database, builds REST and GraphQL API's, Mobile apps with React Native, Progressive web aapps, and I'm a constant learner
                    </p>
                    <p>
                        PS: I love great and responsive UI/UX designs.
                    </p>
                    <p>
                        Thanks for Visiting.

                    </p>
                        <Button outlined><Link to ="hire" > Let's Do Business</Link></Button>
                    </div>
                    <BottomLeft />
                    <BottomRight dark />


                </div>
            </div>
        )
    }
}

export default About 