import React, {Fragment} from 'react'
import {Button, Icon, Loader} from '../../../components'
import Loadable from 'react-loadable'

const FullSlider = ({data, loading})=>{
    return(
        <div className="fullSlider" >       
        {
            loading ?
                <Loader />
            :
            <Fragment >

                <img src={data.imgPath} style={{filter:"blur(200px)"}} alt="" onLoad={(e)=>e.target.style.filter = ""}/>

                <div className="overlay">
                    <h2>{data.name}</h2>
                    {data.description}
                    <a target="_blank" href={data.link || ""}>
                        <Button outlined extended color="white"><Icon>link</Icon>View Project</Button>
                    </a>

                </div>
            </Fragment >
        }
        </div>
    )
}

export default FullSlider;