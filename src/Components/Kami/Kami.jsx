import React from 'react'
import "./kami.css"
import kamiImg from "./../../assets/kami-img.png"

const Kami = () => {
  return (
    <section id='kami'>
        <div className="container">
            <div className="kami-main-div">
                <div className="kami-left-div">
                    <h2>Hubungi Kami</h2>
                    <div className="contact-div-main">
                        <div className="contact-div">
                            <h5>Call</h5>
                            <h6>+6281232936733</h6>
                            <button>Call Now</button>
                        </div>
                        <div className="contact-div">
                            <h5>Call</h5>
                            <h6>+6281232936733</h6>
                            <button>Call Now</button>
                        </div>
                    </div>
                </div>
                <div className="kami-right-div">
                    <h2>Penghargaan</h2>
                    <img src={kamiImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Kami
