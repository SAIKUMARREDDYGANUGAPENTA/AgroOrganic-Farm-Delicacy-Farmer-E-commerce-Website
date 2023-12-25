import React, { useState } from 'react'
import './Header.css'
import Logo from "./register.png"
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { RESET_AUTH, logout } from '../../redux/features/auth/authSlice';
import { ShowOnLogout, ShowOnLogin } from '../hiddenLinks/hiddenLink';





const Header = () => {

const dispatch = useDispatch()
const navigate = useNavigate();

const logoutUser = async () => {
  await dispatch(logout());
  await dispatch(RESET_AUTH());
  navigate("/login");
}

 
  return (
    <header>

      <div className='header'>
        <img src={Logo} style={{ height: "90px" }} />
        <div className="navlinks">
          {/* <!-- !Home -->  */}
          <div className="Home_Button">
            <Link className="linki" to="/" >Home</Link>

          </div>
          <div className="Home_Button">
            <Link className="linki" to="/product">Products</Link>

          </div>
          <div className="Home_Button">
            <Link className="linki" to="/sales">SaleProduct</Link>
          </div>

          <div className="Home_Button">
           <Link className="linki"  to='/cart'>cart</Link>
          </div>
         
        </div>


        <div className="SVGICON">
          <svg width="100px" height="100px" viewBox="-13.68 -13.68 51.36 51.36" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="9" r="3" stroke="#282a2f" stroke-width="0.984"></circle> <circle cx="12" cy="12" r="10" stroke="#282a2f" stroke-width="0.984"></circle> <path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#282a2f" stroke-width="0.984" stroke-linecap="round"></path> </g></svg>
          <div className="signup_dropdown">
            <ShowOnLogout>
              <Link href="/register">SIGNUP</Link>
            </ShowOnLogout>
            <ShowOnLogin>
              <Link to={"/"} onClick={logoutUser}>LOGOUT</Link>
              <Link to={"/profile"}>PROFILE</Link>
            </ShowOnLogin>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header