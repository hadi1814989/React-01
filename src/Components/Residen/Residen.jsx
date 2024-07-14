import React from 'react'
import "./residen.css"
import resImg1 from "./../../assets/residan-img1.jpg"
// import resImg2 from "./../../assets/residan-img2.jpg"
// import resImg3 from "./../../assets/residan-img3.jpg"
const Residen = () => {
  return (
    <section id='residen'>
        <div className="container">
            <div className="residen-frist-div">
                <h4>Pilihan Auditor</h4>
                <h2>Residen Berbagai Kota</h2>
            </div>
            <div className="residen-main-div">
                <div className="residen-card">
                    <img src={resImg1} alt="" />
                    <h2>Magnolia Surabaya</h2>
                    <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                </div>
                <div className="residen-card">
                    <img src={resImg1} alt="" />
                    <h2>Magnolia Surabaya</h2>
                    <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                </div>
                <div className="residen-card">
                    <img src={resImg1} alt="" />
                    <h2>Magnolia Surabaya</h2>
                    <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Residen