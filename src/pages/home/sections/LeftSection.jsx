import React from 'react'
const LeftSection = (
    <div className="left">
        <div id="leftSlider">
            <div className="leftSlide">
                <img src={require('../../../assets/JS.png')} alt=""/>
                <h2>Javascript</h2>
                <h3>"The WebLord"</h3>
            </div>
            <div className="leftSlide">
                <img src={require('../../../assets/Databases.png')} alt=""/>                                
                <h2>Database</h2>
                <h3>"The Record Keepers"</h3>
            </div>
        </div>
    </div>
)

export default LeftSection;