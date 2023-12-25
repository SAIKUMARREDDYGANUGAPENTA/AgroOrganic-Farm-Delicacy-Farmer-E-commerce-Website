import React, { useRef,useEffect,useState } from 'react'
// import axios from 'axios'
import './assets/CSS/auth.scss'

import { Link, useNavigate } from 'react-router-dom'
import LoginImg from './assets/images/green.avif'
import { toast } from 'react-toastify'
import { validateEmail } from '../../utils'
import { useDispatch, useSelector } from "react-redux";
import { login, RESET_AUTH } from '../../redux/features/auth/authSlice'
import Loader from '../../components/loader/Loader'

import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer"


export function Login() {
   
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { isLoading, isLoggedIn, isSuccess } = useSelector((state) => state.auth)
    const [showPassword, setShowPassword] = useState(false);

    const loginUser = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            return toast.error("All fields are required")
        }
        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email")
        }
        const userData = {
            email,
            password,

            // sport
        }
         await dispatch(login(userData))
        // axios.post('http://localhost:5000/api/login', {
        //     email,
        //     password
        // })
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    };
    useEffect(()=>{
        if(isSuccess && isLoggedIn){
            navigate("/product")  //! will change later
        }
        dispatch(RESET_AUTH())
    },[isSuccess,isLoggedIn,dispatch,navigate])

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
    return (
        <>
          <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header/>
      </div>
            {isLoading && <Loader />}

            <section className="signInContainer">
                <div className="img">
                    <img src={LoginImg} alt="Login" />
                    <div className="overlayContainer">
                        <div className="overlay">
                            <div className="overlayPanel">
                                <h1>Welcome!</h1>
                                <p>Let's Connect! Signup here </p>
                                <button className="ghost" id="signIn"><span><Link to="/register" style={{ textDecoration: "none", color: "white" }}>REGISTER</Link></span></button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="form">
                    <h2>LOGIN</h2>
                    <form onSubmit={loginUser} >
                        <input ref={emailRef} type="email" placeholder="Email" id="email" />
                        <input ref={passwordRef} type={showPassword ? 'text' : 'password'} autoComplete="false" placeholder="Password" id="password" />
                          <span className="password-toggle2 str11" onClick={togglePasswordVisibility}>
                            {showPassword ? '😐' : '😑'}
                            </span>    
                        <button type="submit" className='--btn--btn-primary --btn-block'>LOGIN</button>
                    </form>
                    {/* <pre><span className="register"><p>Don't have an account?</p><Link to="/register">SignUp</Link></span></pre> */}
                </div>



            </section>
            <Footer/>
        </>
    )
}
