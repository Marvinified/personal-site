import React, { Component } from 'react';
import {HomePage, Portfolio, About, Hire} from './pages'
import {Switch, BrowserRouter, Route } from 'react-router-dom'
import { ToastContainer, toast, dismiss } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {Loader, RotateScreen} from './components';

class App extends Component {
  
  state = {
    orientation: null
  }

  constructor(props){
      super(props)
      this.requestFullscreen = this.requestFullscreen.bind(this) 
      this.setOrientation = this.setOrientation.bind(this)
  }

  componentDidMount(){
    this.app = document.getElementById("app");
    var orientation = window.screen.msOrientation || (window.screen.webkitOrientation || window.screen.orientation || window.screen.mozOrientation || {}).type
    this.setState({orientation})
    
    var hidden, visibilityChange; 
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      visibilityChange = "webkitvisibilitychange";
    }
    
    document.addEventListener(visibilityChange, (e)=>{
      this.setOrientation()
    } ,false);

    window.onorientationchange = (e)=>{
      this.setOrientation()
    }

    window.onoffline = (e)=>{
      // dismiss()
      toast("Ops! We've lost connection.", {
        position: toast.POSITION.TOP_CENTER,
        type:"error",
        autoClose:5000

      });
    }

    window.ononline = (e)=>{
      // dismiss()
      toast("Woah! We're back Online", {
        position: toast.POSITION.TOP_CENTER,
        type:"success",
        autoClose:2000
      });

    }

  }

  setOrientation(){
      var orientation = window.screen.msOrientation || (window.screen.webkitOrientation || window.screen.orientation || window.screen.mozOrientation || {}).type
      this.setState({orientation})
  }

  isMobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }

  requestFullscreen(element){
    if(this.isMobile()){
      if(element.requestFullscreen)
        element.requestFullscreen()
      else if(element.webkitRequestFullscreen)
        element.webkitRequestFullscreen()
      else if(element.mozRequestFullScreen)
          element.mozRequestFullScreen()
      else if(element.msRequestFullscreen)
        element.msRequestFullscreen()
    }
  }

  render() {
    return (
      <BrowserRouter>
          <div id = "app" onClick={(e)=>this.requestFullscreen(this.app)}>
            {
              this.state.orientation === "landscape-primary" || this.state.orientation === "landscape-secondary" 
              ? 
                <Switch>
                  <Route path="/portfolio" component={Portfolio}/> 
                  <Route path="/loader" component={Loader}  />                   
                  <Route path="/hire" component={Hire}  /> 
                  <Route path="/about" component={About}  /> 
                  <Route path="/" component={HomePage}  /> 
                </Switch> 
              :
              <RotateScreen />
            }
            <ToastContainer/>
          </div>
      </BrowserRouter>

    );
  }
}



export default App;
