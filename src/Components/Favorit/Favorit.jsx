import React from 'react'
import "./favorit.css"
import favImg1 from "./../../assets/favorit-img-1.jpg"
import favImg2 from "./../../assets/favorit-img-2.jpg"
const Favorit = () => {
  return (
   <section id='favorit'>
    <div className="container">
       <div className="favorit-frist-div">
       <h4>Pilihan konsumen</h4>
       <h2>Residen Favorit</h2>
       </div>
       <div className="favorit-main-div">
        <div className="favorit-div2-left">
            <img src={favImg1} alt="" />
            <img className='favImg2' src={favImg2}alt="" />
        </div>
        <div className="favorit-div2-right">
            <h2>Bangunan yang dirancang oleh Aristektur Handal</h2>
            <p>Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
            <button>Hubungi Kami</button>
            <button>Explore lebih banyak</button>
        </div>
       </div>
    </div>
   </section>
  )
}

export default Favorit