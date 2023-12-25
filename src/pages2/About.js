import React from 'react'
import './aboutus.css'
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer"

const About = () => {
  
  return (
    <>
     <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header/>
      </div>
    <div className='aboutus'>
      
<main className="about">
  <section className="about-section">
    <h1>About Our Company</h1>
    <p>"Welcome to our Argo-Organic Farm Delicacy platform, dedicated to connecting farmers, shopkeepers, and customers. We facilitate the exchange of agricultural products, linking farmers cultivating various goods like rice and fruits directly with customers seeking quality produce. Additionally, we support shopkeepers offering essential tools and supplies for farming activities, creating an inclusive ecosystem.</p>
    <p>Our mission is to simplify the agricultural marketplace, providing a seamless online shopping experience. We aim to empower farmers to showcase their produce, offer shopkeepers a broader audience, and enable customers to access high-quality agricultural goods easily. With secure payment methods and a user-friendly interface, we strive to exceed your expectations."</p>
  </section>
  <section className="team-section_1">
    <h2 className='heading50'>Our Team</h2>
    <div className="team-member">
      {/* <img src="team_member1.jpg" alt="Team Member 1"> */}
      <h3>Sai kumar Reddy G.</h3>
      <p>BTech undergraduate student CSE</p>
    </div>
    <div className="team-member">
      {/* <img src="team_member2.jpg" alt="Team Member 2"> */}
      <h3>Ashraf Ali K.</h3>
      <p>BTech undergraduate student CSE</p>
    </div>
    <div className="team-member">
      {/* <img src="team_member2.jpg" alt="Team Member 2"> */}
      <h3>K.Y. Vaishnavi</h3>
      <p>BTech undergraduate student CSE</p>
    </div>
    <div className="team-member">
      {/* <img src="team_member2.jpg" alt="Team Member 2"> */}
      <h3>Sai Hari B.</h3>
      <p>BTech undergraduate student CSE</p>
    </div>
    <div className="team-member">
      {/* <img src="team_member2.jpg" alt="Team Member 2"> */}
      <h3>Aishwaraya</h3>
      <p>BTech undergraduate student CSE</p>
    </div>
    {/* Add more team members */}
  </section>
</main>

    </div>
    <Footer/>
    </>
  )
}

export default About
