import React from 'react'
// import styles from './Home_Styles.css'
import { useEffect } from 'react'
import axios from 'axios'
import "./assets/CSS/Home.css"

//!images

import shipping from "./assets/images/shipping.webp"
import banner from './assets/images/banner1.webp'
import service from "./assets/images/service.webp"
import payment from "./assets/images/payment.webp"
import All_items from "./assets/images/All_items.webp"
import meat from "./assets/images/meat.webp"
import fruits from "./assets/images/fruits.webp"
import vegetables from "./assets/images/vegetables.webp"
import Miscelleneous from "./assets/images/miscelleneous.webp"
import ad1 from "./assets/images/ad1.webp"
import ad2 from "./assets/images/ad2.webp"
import ad3 from "./assets/images/ad3.webp"
import banner2 from "./assets/images/banner2.webp"
import watermelon from "./assets/images/watermelon.png"
import apples from "./assets/images/apples.png"
import grass from "./assets/images/grass.png"
import about1 from "./assets/images/about1.jpg"
import about2 from "./assets/images/about2.jpg"
import farmtool from "./assets/images/farmtool.png";
import fruitbasket from "./assets/images/fruitbasket.png";
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer"










export default function Home() {
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then(result => {
        console.log(result)
        if (result.data !== "Success") {
        }
      }).catch(err => console.log(err))

  })
  return (
    <>
    <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header/>
      </div>
      <div className='firstsection'>
        <img src={banner} style={{ width: "100%" }}  alt="banner" />
        <img src={apples} className='bannerimg' alt="apples"></img>
        <div className='container title'>
        <p>WELCOME TO <span style={{color:"red"}}>AgroOrganic</span></p>
        <img src={grass} className='grass'  alt="grass"></img>
        <h1>AGRICULTURE <br/>AND ECO FARMING</h1>
        </div>
      </div>

  <div className='heading'>
      <h1> Our Services</h1>
  </div>
      <div className='shoppingSection' style={{marginTop:"2em"}}>
       
        <div className='container'>
          <div className="shippingItem">
            <img src={shipping} alt="shippingItem"></img>
            <div className='shippingContent'>
              <h3 className='title'>Low Shipping Cost</h3>
              <p>Resonable shipping prices</p>
            </div>
          </div>
        </div>
        <div className='container'>

          <div className="shippingItem">
            <img src={service} alt="shippingItem"></img>
            <div className='shippingContent'>
              <h3 className='title'>Customer Service</h3>
              <p>24/7 online support Provided</p>
            </div>
          </div>
        </div>
        <div className='container'>

          <div className="shippingItem">
            <img src={payment} alt="shippingItem"></img>
            <div className='shippingContent'>
              <h3 className='title'>Secure Payment</h3>
              <p>Fully secure Payment System</p>
            </div>
          </div>
        </div>
      </div>


      <div className='heading2'>
      <h1> Our Products</h1>
  </div>
      <div className='KnowSection' style={{marginTop:"3em"}}>
        <div className='container'>
          <img src={All_items}  alt="all Items"></img>
          <div className='knowit'>
            <h5>All Items</h5>
          </div>
        </div>
        <div className='container'>
          <img src={fruits} alt="fruits"></img>
          <div className='knowit'>
            <h5>Fruits</h5>
          </div>
        </div>
        <div className='container'>
          <img src={vegetables} alt="vegetables" ></img>
          <div className='knowit'>
            <h5>Vegetables</h5>
          </div>
        </div>
        <div className='container'>
          <img src={meat}  alt="meat"></img>
          <div className='knowit'>
            <h5>Meat</h5>
          </div>
        </div>
        <div className='container'>
          <img src={Miscelleneous} alt="miscelleneous" ></img>
          <div className='knowit'>
            <h5>Miscelleneous</h5>
          </div>
        </div>
      </div>


      <div className='addSection'>
        <div className='container adcon'>
          <img src={ad1} alt="ad1"></img>
          <p>30% off</p>
          <h2>Fruit Juice Package</h2>
        </div>
        <div className='container adcon'>
          <img src={ad2}  alt="ad2"></img>
          <p>10% off</p>
          <h2>Spicy Peppers</h2>
        </div>
        <div className='container adcon'>
          <img src={ad3}  alt="ad3"></img>
          <p>5% off</p>
          <h2>Fresh Vegetables</h2>
        </div>
      </div>


    <div className='anotherAddSection'>
      <h2>Fresh Offer Products</h2>
    <img src={banner2} style={{width:"100%"}}  alt="banner"></img>
    <h1>Save 20%</h1>
    <img src={watermelon} className="imgoverimg" style={{width:"30%"}}  alt="watermelon"></img>
    <button ><a  href="/register" style={{textDecoration:"none",color:"#bac34e"}}>Shop Now</a></button>
    </div>

    <div className='descSection'>
      <div className='imgside'>
        <img src={about1} alt="aboutimg1" className='aboutimg1'></img>
        <img src={about2} alt="aboutimg2"className='aboutimg2'></img>
      </div>
      <div className='aboutSection'>
        <h3>About Agriculture</h3>
        <h1>WE’RE LEADER IN AGRICULTURE MARKET</h1>
        <p>Explore the best in agricultural essentials at our one-stop e-commerce destination. Elevate your farming experience with top-quality seeds, tools, and equipment that redefine efficiency and yield. With a curated selection, competitive prices, and doorstep delivery, we're committed to making your agricultural journey the best it can be.</p>
        <div className='svgarrange'>
        <span>
        <img src={farmtool} alt="aboutimg1" className='farmtool' style={{width:"70px"}}/><p>Farming Tools and Equipment </p></span>
        <span>
        <img src={fruitbasket} alt="aboutimg1" className='farmtool' style={{width:"70px"}}/><p> Garden-Fresh Fruits and Vegetables </p></span>
        </div>


      </div>

    </div>

   


    <Footer/>
    </>

  )
}
