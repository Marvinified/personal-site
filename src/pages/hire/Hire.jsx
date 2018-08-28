import React, {Component} from 'react'
import validator from "validator";
import {Nav, Header, Button, BottomLeft, BottomRight, TextField} from '../../components'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import './style.css'

class Hire extends Component{
    // state = {
    //     email: "",
    //     error: "",
    //     sending: false,
    //     sent:false
    // }

    // onSubmit = (e) =>{
    //     e.preventDefault();
    //     const email = this.state.email;
    //     this.setState({sending:true})
    //     // if(!this.state.error){
    //     //     fetch('https://formspree.io/marvinsmart9@gmail.com', {
    //     //         method: 'post',
    //     //         headers:{
    //     //             'Content-Type' : 'application/json',
    //     //             // 'Referer' : 'https://marvinified.github.com'
    //     //         },
    //     //         body:JSON.stringify({email}) 
    //     //     }).then(res=>{
    //     //         res.json().then(data=>{
    //     //             if(data.success && res.status === 200){
    //     //                 this.setState({sending:false, sent:true, email:""})
    //     //                 toast("Thanks, you will recieve a feedback shortly!", {
    //     //                     position: toast.POSITION.BOTTOM_CENTER
    //     //                   });
    //     //             }else{
    //     //                 toast.error(`Something Bad Just Happened! Check your Internent Connection and Try Again`, {
    //     //                     position: toast.POSITION.BOTTOM_CENTER
    //     //                   })
    //     //                   this.setState({sending:false, sent:false})                        
    //     //             }
    //     //         })
    //     //     }).catch(err=>{
    //     //         console.log(err)
    //     //         toast.error(`Something Bad Just Happened! Check your Internent Connection and Try Again`, {
    //     //             position: toast.POSITION.BOTTOM_CENTER
    //     //         })
    //     //         this.setState({sending:false, sent:false})                        
    //     //     })
    //     // }
    // }
    // onChange = (e) => {
    //     const email = e.target.value
    //     if(validator.isEmail(email)){
    //         this.setState({error:"", email})   
    //     }else{
    //         this.setState({error:"Please Enter a Valid Email.", email})   
    //     }
    // }
    render(){
        return (
            <div className="hire" >
                <div className="container">
                    <Header />
                    <Nav />
                    <div className="left">
                        <img src={require('../../assets/Main@3.png')} alt=""/>
                        <h1>Woah Let's Do this</h1>
                    </div>
                    <div className="right">
                        Let's Talk Over Mail
                        {/* <form onSubmit={this.onSubmit}>
                            <TextField className="field" name="email" value={this.state.email} placeholder="Your Email" onChange={this.onChange} />
                            <span className="error">
                                {this.state.email && this.state.error}
                            </span>

                            <Button outlined disabled={Boolean(this.state.sending || this.state.error || !this.state.email )}>
                            {this.state.sending?"Processing...":"Let's Do Business"}
                            </Button>
                        </form> */}
                            <a href="mailto:marvinified@gmail.com">
                        <Button outlined >
                                Mail Me Now
                        </Button>
                            </a>
                        
                    </div>
                    <BottomLeft />
                    <BottomRight dark />
                    <ToastContainer/>

                </div>

            </div>
        )
    }
}

export default Hire 