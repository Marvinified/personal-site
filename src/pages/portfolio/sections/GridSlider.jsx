import React, {Fragment} from 'react'
import { Loader } from '../../../components';

const GridSlider = ({data, onClick, loading}) =>{
    return(
        <Fragment>
        {
            loading ?
            <div className="fullSlider">
                <Loader/>
            </div>
            :
            <div className="gridSlider">
                {
                    data && data.map((item)=>{
                        return(
                            <div key={item.id} id={item.id} className="item" onClick={onClick}>
                                <img src={item.imgPath} alt=""/>
                                <div className="overlay" >
                                    {item.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        }
        </Fragment>
    )
}

export default GridSlider 