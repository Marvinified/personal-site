import React, {Component} from 'react'
import {Nav, Header, IconButton, Button, BottomLeft, BottomRight} from '../../components'
import GridSlider from './sections/GridSlider'
import { firestore } from "../../firebase";
import FullSlider from './sections/FullSlider'
import {Link} from 'react-router-dom'
import './style.css'

class Portfolio extends Component{
    state = {
        grid : false,
        items : [],
        startIndex: 0,
        selected:1,
        loading: true
        
    }

    constructor(props){
        super(props)
        this.onClickItem = this.onClickItem.bind(this)
        this.toggleGrid = this.toggleGrid.bind(this)
        this.getGridItems = this.getGridItems.bind(this)
        this.getItem =this.getItem.bind(this)
        this.gridNext = this.gridNext.bind(this)
        this.gridPrev = this.gridPrev.bind(this)
    }

    componentDidMount(){
        firestore.collection("test").get().then((projects) => {
            const items = []
            projects.forEach((project) => {
                items.push({id:project.id, ...project.data()})
            });
            const selected = items[0].id
            const loading = false
            this.setState({items, selected, loading})
        }).catch(e=>console.log);
    }

    toggleGrid(){
        this.setState({grid:!this.state.grid})
    }

    gridNext(){
        if(this.state.grid){
            if(this.state.startIndex+9 < this.state.items.length)
                this.setState({startIndex:this.state.startIndex+9})
        }else{
            let itemIndex = 0
            this.state.items.filter((value, index)=>{
                if(this.state.selected === value.id){
                    itemIndex = index; 
                }  
            })
            if(itemIndex+1 < this.state.items.length){
                this.setState({selected:this.state.items[itemIndex+1].id})
            }
        }
    }
    gridPrev(){
        if(this.state.grid){
            if(this.state.startIndex > 0)
                this.setState({startIndex:this.state.startIndex-9})
        }else{
            let itemIndex = 0
            this.state.items.filter((value, index)=>{
                if(this.state.selected === value.id){
                    itemIndex = index; 
                }
            })
            if(itemIndex > 0){
                this.setState({selected:this.state.items[itemIndex-1].id})
            }
        }
    }

    onClickItem(e){
        const selected = e.currentTarget.id;
        this.setState({selected})
        this.toggleGrid()

    }

    getGridItems(startIndex, items){
        let griditems = items.filter((value, index) => (index >= startIndex && index < startIndex+9 && index < items.length))
        return griditems
            
    }

    getItem(index, items){
        const currentItem = items.filter(value => value.id === index)
        return currentItem[0];
    }

    render(){
        return (
            <div className="portfolio">
                <div className="container">
                    <Header />
                    <Nav />
                    <h4 className="sub">
                        {/* {!this.state.grid && <IconButton flat color="primary" onClick={this.toggleGrid} > keyboard_backspace </IconButton>}  */}
                        Portfolio
                    </h4>
                    <div className="backArrow">
                        <IconButton flat onClick={this.gridPrev}>keyboard_arrow_left</IconButton>
                    </div>
                    {
                        this.state.grid 
                        ?
                        <GridSlider data={this.getGridItems(this.state.startIndex, this.state.items)} onClick={this.onClickItem} loading={this.state.loading}/>
                        :
                        <FullSlider data={ this.getItem(this.state.selected, this.state.items)} loading={this.state.loading}/>

                    }
                    <div className="forwardArrow">
                        <IconButton flat onClick={this.gridNext} >keyboard_arrow_right</IconButton>
                    </div>
                    <div className="abstract">
                        <img src={require('../../assets/Abstract@dark.png')} alt=""/>
                        <Button outlined> <Link to="hire">Hire Me</Link></Button>
                    </div>
                    <BottomLeft />
                    <BottomRight dark />
                </div>
            </div>
        )

    }
}

export default Portfolio;