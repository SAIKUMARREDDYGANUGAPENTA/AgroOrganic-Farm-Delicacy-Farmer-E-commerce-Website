import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer"

const Adminlogin = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userdata, setuserdata] = useState([]);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data2.json');
        setuserdata(response.data.data2); // Update to response.data.data2
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
console.log(userdata)

  const loginUser = (event) => {
    event.preventDefault();
  
    // Check if userdata is an array and not empty
    if (Array.isArray(userdata) && userdata.length > 0) {
      // Check if any user in the fetched data matches the entered email and password
      const user = userdata.find((user) => user.email === email && user.password === password);
  
      if (user) {
        toast.success('Logged in successfully');
        navigate('/admin');
        // Perform any action for successful login, such as redirecting to another page
      } else {
        toast.error('Invalid credentials');
      }
    } else {
        toast.error('No user data available');
        }
  };
  





  return (
    <>
     <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header/>
      </div>
    <div className="sign_body_1">
      
      <div className='signuppage_card_1'>
      </div>

      <div className="cont_5">
        <form className="form sign-in_1" onSubmit={loginUser}>
          <h2 className="head_h2">Welcome</h2>
          <label className="label_s">
            <input
             name="email" 
             
            className="input_s" 
            type="email"
             placeholder="Email" required
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
           
              />
          </label>
          <label className="label_s">
            <input
              name="password"
              className="input_s"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
          <div className="show-password">
            <input
              type="checkbox"
              name="checkbox1"
              id="check"
              className="check1"
              onChange={handleCheckboxChange}
            />
            <label className="label_s check" htmlFor="check">
              Show Password
            </label>
          </div>
          <br />
          
          <button type="submit" className="submit_btn_5 button-30">
            Sign In
          </button>
          </form>
          
        
        <div className="img_2">
          <div className="img__tex9 m--up">
            <h3 className='head_h2' style={{color:'white'}}>Hello Admin</h3>
          </div>
          <div className="btn_2">
                
              
            
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    <Footer/>
    </>
  );
};

export default Adminlogin;
