import useState, * as React from "react";
import "../styles/home.scss";

function Home() {
  return (
    <div className="app">
      <div className="avatar">
        <div className="circle">
          <div className="circle">
            <img alt="marvin" src={require("../assets/avatar.png")} />
          </div>
        </div>
      </div>
      <div className="content">
        {/* <img alt="marvin" src={require("../assets/mario.png")} /> */}
        <h1>Marvin Tunji-ola</h1>
        <div className="title">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://marvinified.dev"
          >
            {" "}
            Software Developer{" "}
          </a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          {/* <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://zitabyte.io"
          >
            {" "}
            Co-founder Zitabyte
          </a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span> */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://letsmeat.ng"
          >
            {" "}
            Co-founder & CTO @ Let's Meat.
          </a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://tropixel.com.ng"
          >
            {" "}
            Lead Developer @ Tropixel BS
          </a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          {/* <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1oXk9uukqV3gSfAvUNumN2KyUrqwb-GHC/view?usp=sharing"
          >
            <span>Resume</span>
            <ion-icon name="download"></ion-icon>
          </a> */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://medium.com/@marvinified"
          >
            <span>Blog</span>
          </a>
        </div>
        <br />
        <br />
        Hi! I'm Marvin. Nice to meet you.
        <br />
        <br />
        I'm a sage of Javascript but also experienced in other languages such as
        PHP, Dart, Python. I'm experienced building elegant and functional
        softwares as a contributor and as well as a team lead. Collaboration and
        communication are part of my core principles.
        <br />
        <br />
        I love building beautiful and functional stuffs, I love coding, I'm an
        AI/ML Ethusiast, belive in learning, love electronic music.
        <br />
        <br />
        <br />
        <div className="connect">
          <span>Connect with me |</span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/marvinified"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/marvinified"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/marvinified"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:marvinified@gmail.com"
          >
            <ion-icon name="mail"></ion-icon>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://medium.com/@marvinified"
          >
            <ion-icon name="book"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
