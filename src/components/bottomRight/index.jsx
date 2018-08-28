import React, {Fragment, Component} from 'react'
import Button from '../button'
// import IconButton from '../iconButton'
import {firestore} from '../../firebase'
import Icon from '../icon'
import './style.css'


class BottomRight extends Component{
    state ={
        liked : false,
        likes: null
    }
    getIp = () =>{
        return fetch("https://jsonip.com/").then(res=>{
            return res.json().then(res=>{
                return(res.ip)
            })
        })
    }

    isLiked = () =>{
        this.getIp().then(IP_ADDRESS=>{
            firestore.collection('likes').doc(IP_ADDRESS).get()
            .then((doc)=>{
                if(doc.data())
                    this.setState({liked:true})
            }).catch(console.log)
        })
    }

    like = () =>{
        this.getIp().then(IP_ADDRESS=>{
            if(!this.state.like){
                // alert()
                firestore.collection('likes').doc(IP_ADDRESS).set({
                    liked: true
                }).then(res=>{
                    this.isLiked()
                    this.countLikes()
                })
            }
        })
    }

    countLikes = ()=>{
        firestore.collection('likes').get().then(({size})=>{
            const likes = size
            this.setState({likes})
        })
    }
    
    componentDidMount(){
        this.isLiked()
        this.countLikes()
    }

    render(){
        const {dark} = this.props
        const {liked, likes} = this.state
        return(
            <div className="bottomRight">
                {
                    dark ?
                    <Fragment>
                        <Button flat extended style={{ fontSize:'1.2em', color: liked && '#ff0000'}} onClick={this.like} ><Icon>favorite</Icon>{likes}</Button>
                        <a href="http://github.com/marvinified" target="_blank"><img src={require('../../assets/Github@dark.png')} alt=""/></a>
                        <a href="http://twitter.com/marvinified" target="_blank"><img src={require('../../assets/Twitter@dark.png')} alt=""/></a>
                        <a href="http://dribbble.com/marvinified" target="_blank"><img src={require('../../assets/Dribbble@dark.png')} alt=""/></a>
                        <a href="https://stackoverflow.com/users/story/7594403" target="_blank"><img src={require('../../assets/Stackoverflow@dark.png')} alt=""/></a>
                    </Fragment>
                    :
                    <Fragment>
                        <Button flat extended style={{fontSize:'1.2em', color: liked?'#ff0000':'#c0c0c0'}} onClick={this.like}><Icon >favorite</Icon>{likes}</Button>
                        <a href="http://github.com/marvinified" target="_blank"><img src={require('../../assets/Github.png')} alt=""/></a>
                        <a href="http://twitter.com/marvinified" target="_blank"><img src={require('../../assets/Twitter.png')} alt=""/></a>
                        <a href="http://dribbble.com/marvinified" target="_blank"><img src={require('../../assets/Dribbble.png')} alt=""/></a>
                        <a href="https://stackoverflow.com/users/story/7594403" target="_blank"><img src={require('../../assets/Stackoverflow.png')} alt=""/></a>
                    </Fragment>
                }
            </div>
    
        )
    }
}
export default BottomRight;