import React from 'react'
import "./banner.css"
import banImg from "../../assets/ban-img-react.png"

const Banner = () => {
  return (
 <section id='banner'>
  <div className="container">
    <div className="main-banner-div">
      <div className="banner-text">
        <h2>Temukan Hunian Keluarga <br /> Sesuai Keinginanmu</h2>
        <p>Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>
       <input className='banner-input' type="text" placeholder='Search location, properties, residental group' />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </div>
      <div className="banner-img">
       <img src={banImg} alt="" />
      </div>
    </div>
  </div>
 </section>
  )
}

export default Banner