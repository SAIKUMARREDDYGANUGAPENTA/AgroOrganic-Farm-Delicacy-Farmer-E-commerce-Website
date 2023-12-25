import React from 'react'
import styles from './Footer.module.css'

const Footer=()=> {
    const date=new Date();
    const year=date.getFullYear();
  return (
    <>
   
<footer className={styles.footer2} >
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.footerCol}>
                <h4>Discover</h4>
                <ul>
                    
                    <li><a href="/">About</a></li>
                    <li><a href="/">Accessibility</a></li>
                    <li><a href="/">Contracting</a></li>
                    <li><a href="/">Privacy & Security Notice</a></li>
                </ul>
            </div>
            <div className={styles.footerCol}>
                <h4>References</h4>
                <ul>
                    
                    <li><a href="/">NASA Power Data</a></li>
                    <li><a href="/">World Clim</a></li>
                    <li><a href="/">Bio-Diversity Informatics</a></li>
                    
                   
                </ul>
            </div>
            <div className={styles.footerCol}>
                <h4>Ask Us</h4>
                <ul>
                    <li><a href="/">Contact us</a></li>
                    <li><a href="/">AOFD Disclaimers</a></li>
                    <li><a href="/">Hotlines</a></li>
                    <li><a href="/">FAQs</a></li>
                </ul>
            </div>
            <div className={styles.footerCol}>
                <h4>follow us</h4>
                <div className="social-links">
                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
<div className={styles.footer}>&copy; {year} All Rights Reserved </div>

</>
  )

}

export default Footer;