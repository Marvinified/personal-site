import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1d9QPZAC02SbBBcPfFhFOC1NvlnMGYmG-/view?usp=sharing"
        >
          Resume
        </a>
        <Link to="/about">ABOUT ME</Link>
        <Link to="/hire">HIRE ME</Link>
      </nav>
    );
  }
}
export default Nav;
