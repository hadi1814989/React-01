import React from 'react'
import "./footer.css"
import footerLogoImg from "../../assets/footer-logo.png"

const Footer = () => {
  return (
    <section id='footer'>
        <div className="container">
            <div className="footer-main-div">
                <div className="footer-img-div">
                    <img src={footerLogoImg} alt="" />
                </div>
                <div className="footer-icon-div">
                    <img src={footerLogoImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer