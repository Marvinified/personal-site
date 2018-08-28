import React,  {Component, Fragment} from 'react'
import LeftSection from './sections/LeftSection'
import MainSection from './sections/MainSection'
import RightSection from './sections/RightSection'
import {Nav, Header, BottomLeft, BottomRight} from '../../components'
import {Link} from 'react-router-dom'
import './style.css'


class HomePage extends Component {
    state = {
        translateLength: {
            left: 0,
            right: 0
        },
        lastscroll: 0,
        touchY: 0
    }

    constructor(props){
        super(props)
        this.handleOnWheel = this.handleOnWheel.bind(this)
        this.handleLeftSlider = this.handleLeftSlider.bind(this)
        this.handleOnTouchMove = this.handleOnTouchMove.bind(this)
    }
    componentDidMount(){
        this.leftSlideNodes = document.getElementsByClassName("leftSlide");
        this.leftSlideNode = this.leftSlideNodes[0]
        this.leftSliderNode = document.getElementById('leftSlider')
        this.rightSlideNodes = document.getElementsByClassName("rightSlide");
        this.rightSlideNode = this.rightSlideNodes[0];
        this.rightSliderNode = document.getElementById('rightSlider');
        this.bottomSlider = document.getElementsByClassName('bottomCenter');
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
                this.leftSliderNode.style.transition = "transform 0s"
                
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
                this.leftSliderNode.style.transition = "transform 0s"
                
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
                this.rightSliderNode.style.transition = "transform 0s"
                
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
                this.rightSliderNode.style.transition = "transform 0s"
                
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

            this.setState({
                translateLength:{
                    left, right
                }
            })

        }
    }

    handleOnTouchMove(e){
        e.preventDefault();
        e.stopPropagation()

        if(!this.state.touchY){
            const touchY = e.targetTouches[0].screenY
            this.setState({touchY})
            return
        }
        const deltaY = this.state.touchY - e.targetTouches[0].screenY
        e.deltaY = deltaY < 0 ? deltaY - 60 : deltaY + 60;
        // alert(e.targetTouches[0].screenY)
        const time =  (new Date().getTime())
        // if(!this.state.lastscroll ||  time - this.state.lastscroll > 500){ 
            this.setState({lastscroll: time, touchY:0})
            const right = this.handleRightSlider(e)
            const left = this.handleLeftSlider(e)

            this.setState({
                translateLength:{
                    left, right
                }
            })

        // }
        

    
    }
    render(){
        return(
            <div className="homepage" onTouchMove = {this.handleOnTouchMove} onWheel={this.handleOnWheel} id="main">
                <div className="container" >
                    {/* Branding Header */}
                    <Header />
                    
                    {/* Navigation Bar */}
                    <Nav />

                    {/* Left Section */}
                    {LeftSection}

                    {/* Main Section */}
                    {MainSection}

                    {/* Right Section */}
                    {RightSection}

                    {/* Bottom Left Section */}
                    <BottomLeft />
                    
                    {/* Bottom Center */}
                    <div className="bottomCenter">
                        {
                            !this.state.translateLength.left ? 
                            "| - Scroll Up":
                            "| - Scroll Down"
                        }
                    </div>

                    {/* Bottom Right Section */}
                    <BottomRight />
                </div>
            </div>
        )
    }
}

export default HomePage;