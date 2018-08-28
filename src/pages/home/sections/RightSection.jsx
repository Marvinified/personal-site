import React from 'react'

const RightSection = (
    <div className="right">
        <div className="rightSlider" id="rightSlider">
            <div className="rightSlide">
                {/* <h2>MY JS ARMY</h2> */}
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
                            <p>A JavaScript run-time environment...</p>
                            <a href="https://nodejs.org/">Learn More</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>Express.js</h4>
                            <p>A web framework for Node.js...</p>
                            <a href="https://expressjs.org/">Learn More</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>And More...</h4>
                        </div>
                    </li>
                </ul>
            </div>    
            <div className="rightSlide">
                {/* <h3>Database</h3> */}
                <ul>
                    <li>
                        <div>
                            <h4>MongoDB</h4>
                            <p>A document based NoSQL database...</p>
                            <a href="https://mongodb.com/">Learn More</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>MySQL</h4>
                            <p>An relational database system...</p>
                            <a href="https://mysql.com.org/">Learn More</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>PostgreSQL</h4>
                            <p>An object-relational database...</p>
                            <a href="https://postgresql.org/">Learn More</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>And More...</h4>
                        </div>
                    </li>
                </ul>
            </div>    
        </div>
    </div>
)

export default RightSection;