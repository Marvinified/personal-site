import React, { useState } from "react";
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
          <a href="/"> Frontend Developer </a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="/"> Co-founder Zitabyte</a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="/"> Co-founder & CTO Let's Meat.</a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="/"> Tech Lead @ Tropixel BS</a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="/">
            <span>Resume</span>
            <ion-icon name="download"></ion-icon>
          </a>
        </div>
        <br />
        <br />
        Hi! I'm Marvin. Nice to meet you.
        <br />
        <br />
        I'm a sage of Javascript but also experienced in other languages such as
        PHP, Dart, Python. I'm experienced building elegant and functional
        softwares as a team member and as well as a team lead. Collaboration and
        communication are part of my core principles.
        <br />
        <br />
        I love building beautiful and functional stuffs, I love coding, I'm an
        AI/ML Ethusiast, belive in learning. , love electronic music.
        <br />
        <br />
        <br />
        <div className="connect">
          <span>Connect with me |</span>
          <a href="/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="/">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="/">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="/">
            <ion-icon name="mail"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
