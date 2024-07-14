import React from 'react'
import "./header.css"
import logoImg from "../../assets/logo.png"
const Header = () => {
  return (
    <section id='header'>
        <div className="container">
          <div className="main-header-div">
          <div className="logo">
          <img src={logoImg} alt="" />
          </div>
          <div className="menu">
          <ul>
            <li><a href="#tahapan">Home</a></li>
            <li><a href="#residen">About</a></li>
            <li><a href="#kami">Properties</a></li>
            <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
          </div>
    </section>
  )
}

export default Header