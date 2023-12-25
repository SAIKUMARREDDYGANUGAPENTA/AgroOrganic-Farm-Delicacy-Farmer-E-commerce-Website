import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <div>
    <div className='bottom'>
        
    </div>
    <div className='footer'>

      
      <p className='text-center'>
      <Link to='/about'>About</Link>|
      <Link to='/contact'>contact</Link>|
      
      </p>
    </div>
    </div>
  )
}

export default Footer