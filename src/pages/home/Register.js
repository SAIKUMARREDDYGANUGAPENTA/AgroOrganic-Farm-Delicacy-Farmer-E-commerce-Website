import React, { useRef,useEffect,useState } from 'react'
// import axios from 'axios'
import './assets/CSS/auth.scss'
import {Link, useNavigate} from 'react-router-dom'
import LoginImg from './assets/images/green.avif'
import { toast } from 'react-toastify'
import { validateEmail } from '../../utils'
import {useDispatch, useSelector} from "react-redux";
import { register,RESET_AUTH } from '../../redux/features/auth/authSlice'
import Loader from '../../components/loader/Loader'
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer"

export function Register() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const phonenumberRef = useRef();
    const roleRef = useRef(); // !Added for role
    const addressRef = useRef();
    const stateRef = useRef();
    const pincodeRef = useRef();
    const [showPassword, setShowPassword] = useState(false);
    // const sportRef=useRef();
    const dispatch=useDispatch()
    const {isLoading,isLoggedIn,isSuccess}=useSelector((state)=>state.auth)
    const navigate =useNavigate();

    const registerUser = async(event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const phonenumber = phonenumberRef.current.value;
        const role = roleRef.current.value; // !Retrieve the selected role
        const address = addressRef.current.value;
        const state = stateRef.current.value;
        const pincode = pincodeRef.current.value;

        if(!email||!password){
            return toast.error("All fields are required")
        }
        if(password.length<6){
            return toast.error("Password must be atleast 6 characters")
        }
        if(phonenumber.length<10){
            return toast.error("Please provide valid phone Number")
        }
        if(!validateEmail(email)){
            return toast.error("Please enter a valid email")
        }

        
            const userData={
            name,
            email,
            password,
            phonenumber,
            role,
            address,
            state,
            pincode
            }
            await dispatch(register(userData))
   
        };
        const togglePasswordVisibility = () => {
            setShowPassword((prevShowPassword) => !prevShowPassword);
          };

        useEffect(()=>{
            if(isSuccess && isLoggedIn){
                navigate("/product")
            }
            dispatch(RESET_AUTH())
        },[isSuccess,isLoggedIn,dispatch,navigate])

    return (
        
    <>
      <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header/>
      </div>
    {isLoading && <Loader/>}
    <section className="signInContainer">
            <div className="form">
                <h2>SIGNUP</h2>
                <form onSubmit={registerUser} id="form1">
                    <input ref={nameRef} type="text" placeholder="Name" id="name" /><br />
                    <input ref={phonenumberRef} type='text' placeholder='Phone Number' id='phone'/><br/>
                    <label>Role:</label>
            <select ref={roleRef} id="role">
              <option value="Customer">Customer</option>
              <option value="Farmer">Farmer</option>
              <option value="Sales Agent">Sales Agent</option>
            </select>
            <br />
            <input ref={emailRef} type="email" placeholder="Email" id="email" /><br />
            <input ref={passwordRef} type={showPassword ? 'text' : 'password'} autoComplete="false" placeholder="Password" id="password"
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? '😐' : '😑'}
            </span>                    
            <input ref={addressRef} type="text" placeholder="Address" id="address" /><br />
            <input ref={stateRef} type="text" placeholder="State" id="state" /><br />
            <input ref={pincodeRef} type="text" placeholder="pincode" id="pincode" /><br />
                    <button type="submit">Submit</button>
                </form>
                {/* <p>Already have an account? <a className='other' href="/login">Login</a></p> */}
            </div>
            <div className="img">
            <img src={LoginImg} alt="Login"/>
            <div className="overlayContainer">
            <div className="overlay">
                <div className="overlayPanel">
                    <h1>Registered?</h1>
                    <p>Let's get you logged in! </p>
                    <button className="ghost" id="signIn"><span><Link to="/login" style={{textDecoration:"none",color:"white"}}>LOGIN</Link></span></button>
                </div>

            </div>
        </div>
        </div>
       
    </section>
    <Footer/>
        </>
        )
}
