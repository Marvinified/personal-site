import React,  {Component, Fragment} from 'react'
import './style.css'
import LeftSection from './sections/LeftSection'

const MainSection =(
    <Fragment>
        <section>
            <img src={require('../../assets/Abstract.png')} className="background-image"/>
        </section>
        <img src={require(`../../assets/Main.png`)} className="main"/>
        <div className='btn'>
            <button>SEE PORTFOLIO</button>

        </div>
    </Fragment>
)

class HomePage extends Component {
    state = {
        translateLength: {
            left: 0,
            right: 0
        },
        lastscroll:  0
    }

    constructor(props){
        super(props)
        this.handleOnWheel = this.handleOnWheel.bind(this)
        this.handleLeftSlider = this.handleLeftSlider.bind(this)
    }
    componentDidMount(){
        this.leftSlideNodes = document.getElementsByClassName("leftSlide");
        this.leftSlideNode = this.leftSlideNodes[0]
        this.leftSliderNode = document.getElementById('leftSlider')
        this.rightSlideNodes = document.getElementsByClassName("rightSlide");
        this.rightSlideNode = this.rightSlideNodes[0]
        this.rightSliderNode = document.getElementById('rightSlider')
    }

    handleLeftSlider(e){
        // if scroll up wheelevent
        if(e.deltaY < 0 && Math.abs(e.deltaY) > 30){
            // calculate translate lenght
            const translateLength = this.state.translateLength.left-this.leftSlideNode.clientWidth;

            // if translate lenght greater or equal zero proceed
            if(translateLength >= 0){
                let i =parseInt(translateLength/this.leftSlideNode.clientWidth)
                
              
                if(i< this.leftSliderNode.children.length-1)
                // make prev slide item fade out
                this.leftSlideNodes[i+1].animate([
                        { opacity:1, transform:"scale(1)"},
                        { opacity: 0, transform:"scale(0)"},
                    ], {duration:0, fill:'forwards'})

                // apply animation slider
                this.leftSliderNode.style.transform ="translateX(-"+translateLength+"px)"
                this.leftSliderNode.style.transition = "transform .5s"
                
                // make next slide item fade in
                this.leftSlideNodes[i].animate([
                    { opacity: 0.5, transform:"scale(.75)"},
                    { opacity:1, transform:"scale(1)"}
                ], {duration:500, fill:'forwards'})

                // update translate length in state
                return translateLength
            }
        }

        // if scroll down wheelevent
        if(e.deltaY > 0 && Math.abs(e.deltaY) > 30){
            // calculate translate lenght
            let translateLength = this.state.translateLength.left + this.leftSlideNode.clientWidth ;

            // if translate lenght greater or equal zero proceed
            if(translateLength < (this.leftSlideNode.clientWidth * this.leftSliderNode.children.length)){
                let i =parseInt(translateLength/this.leftSlideNode.clientWidth)                
                if(i)
                    // make prev slide item fade out
                    this.leftSlideNodes[i-1].animate([
                            { opacity:1, transform:"scale(1)"},
                            { opacity: 0, transform:"scale(0.5)"},
                        ], {duration:0, fill:'forwards'})

                // apply animation slider
                this.leftSliderNode.style.transform ="translateX(-"+translateLength+"px)"
                this.leftSliderNode.style.transition = "transform .5s"
                
                // make next slide item fade in
                this.leftSlideNodes[i].animate([
                    { opacity: 0.5, transform:"scale(.75)"},
                    { opacity:1, transform:"scale(1)"}
                ], {duration:500, fill:'forwards'})

                // update translate length in state
                // console.log("translate::"+translateLength)
                return translateLength

            }
            
        }
        return this.state.translateLength.left;
        // return

    }

    handleRightSlider(e){
        // if scroll up wheel event
        if(e.deltaY < 0 && Math.abs(e.deltaY) > 30){
            //calculate translate length
            const translateLength = this.state.translateLength.right-this.rightSlideNode.clientWidth;
            //if translate lenght greater or equal zero proceed
            if(translateLength >= 0){
                let i =parseInt(translateLength/this.rightSlideNode.clientWidth)
                
                if(i < this.rightSliderNode.children.length-1)
                // make prev slide item fade out
                this.rightSlideNodes[i+1].animate([
                        { opacity:1, transform:"scale(1)"},
                        { opacity: 0, transform:"scale(0)"},
                    ], {duration:0, fill:'forwards'})

                // apply animation slider
                this.rightSliderNode.style.transform ="translateX(-"+translateLength+"px)"
                this.rightSliderNode.style.transition = "transform .5s"
                
                // make next slide item fade in
                this.rightSlideNodes[i].animate([
                    { opacity: 0.5, transform:"scale(.75)"},
                    { opacity:1, transform:"scale(1)"}
                ], {duration:500, fill:'forwards'})

                // update translate length in state
                return translateLength

            }
        }

        // if scroll down wheelevent
        if(e.deltaY > 0 && Math.abs(e.deltaY) > 30){
            // calculate translate lenght
            let translateLength = this.state.translateLength.right + this.rightSlideNode.clientWidth ;

            // if translate lenght greater or equal zero proceed
            if(translateLength < (this.rightSlideNode.clientWidth * this.rightSliderNode.children.length)){
                let i =parseInt(translateLength/this.rightSlideNode.clientWidth)                
                if(i)
                    // make prev slide item fade out
                    this.rightSlideNodes[i-1].animate([
                            { opacity:1, transform:"scale(1)"},
                            { opacity: 0, transform:"scale(0.5)"},
                        ], {duration:0, fill:'forwards'})

                // apply animation slider
                this.rightSliderNode.style.transform ="translateX(-"+translateLength+"px)"
                this.rightSliderNode.style.transition = "transform .5s"
                
                // make next slide item fade in
                this.rightSlideNodes[i].animate([
                    { opacity: 0.5, transform:"scale(.75)"},
                    { opacity:1, transform:"scale(1)"}
                ], {duration:500, fill:'forwards'})

                // update translate length in state
                return translateLength

            }
        }

        return this.state.translateLength.right;

    }

    handleOnWheel(e){
        const time =  (new Date().getTime())
        if(!this.state.lastscroll ||  time - this.state.lastscroll > 500){ 
            this.setState({lastscroll: time})
            const right = this.handleRightSlider(e)
            const left = this.handleLeftSlider(e)
            console.log(left +"::"+right)
            this.setState({
                translateLength:{
                    left, right
                }
            })
            // console.log(this.state.translateLength)
        }
    }

    render(){
        return(
            <div className="homepage" onWheel={this.handleOnWheel}>
                <div className="container">
                    {/* Branding Header */}
                    <header>I'M MARVIN</header>
                    {/* Navigation Bar */}
                    <nav> 
                        <a>PORTFOLIO</a>    
                        <a>ABOUT ME</a>    
                        <a>CONTACT ME</a>    
                    </nav>
                    {/* Left Section */}
                    {LeftSection}
                    {/* Main Section */}
                    {MainSection}
                    {/* Right Section */}
                    <div className="right">
                        <div className="rightSlider" id="rightSlider">
                            <div className="rightSlide">
                                <h3>MY JS ARMY</h3>
                                <ul>
                                    <li>
                                        <div>
                                            <h4>React.js</h4>
                                            <p>A Javascript library for building UI...</p>
                                            <a href="http://http://reactjs.org/">Learn More</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h4>Node.js</h4>
                                            <p>A JavaScript run-time environment</p>
                                            <a href="https://nodejs.org/">Learn More</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>    
                            <div className="rightSlide">
                                <h3>Database</h3>
                                <ul>
                                    <li>
                                        <div>
                                            <h4>React Js</h4>
                                            <p>React.js is a javascript ui library...</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h4>React Js</h4>
                                            <p>React.js is a javascript ui library...</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;