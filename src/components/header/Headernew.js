import React from 'react'
import styles from './Header.css'
import Logo from "./register.png"
import {Link, NavLink} from 'react-router-dom';


const activeLink=({isActive})=>{
isActive ?`${styles.active}`:""
}

const Headernew=()=>{
    return <header>
        <div className={styles.header}>
       <Link to="/"> <div className="logo"><span><img src={Logo} height="80em" alt="logo"/ ></span></div></Link>
       <nav>
        <ul>
            <li>
                <NavLink to="/" className={activeLink} />
            </li>

        </ul>
       </nav>

        </div>
        <div className={styles["heaser-right"]}>

        </div>
    </header>
}