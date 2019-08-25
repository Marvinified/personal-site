import React, { Fragment } from "react";
// import { Button } from "../../../components";
// import { Link } from "react-router-dom";
const MainSection = (
  <Fragment>
    <section>
      <img
        alt=""
        src={require("../../../assets/Abstract.svg")}
        className="background-image"
      />
    </section>
    <img alt="" src={require(`../../../assets/Main.png`)} className="main" />
    {/* <div className='btn'>
            <Link to="portfolio"><Button outlined >SEE MY WORK</Button></Link>
        </div> */}
  </Fragment>
);

export default MainSection;
