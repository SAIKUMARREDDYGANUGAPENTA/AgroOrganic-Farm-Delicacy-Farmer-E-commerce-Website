import React from 'react'

import { Link } from 'react-router-dom'
import './pagenotfound.css'
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer"

const Pagenotfound = () => {
  return (

    <>
     <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header/>
      </div>
    <div className='pnf'>
    <h1 className='pnf-title'>404</h1>
    <h2 className='pnf-heading'>Oops ! Page not Found</h2>
    <Link to='/' className='pnf-btn btn_class'>Home</Link>
    </div>
    <Footer/>
    </>
 
  )
}

export default Pagenotfound
