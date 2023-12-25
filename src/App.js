import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from "./pages/home/Home";
// import Footer from "./components/footer/Footer"
import { Register } from './pages/home/Register';
import {Login} from './pages/home/Login';
import {CustomerPage} from "./pages/home/CustomerPage"
// import {Test} from "./pages/home/Test";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { getLoginStatus } from './redux/features/auth/authSlice';
import Profile from './pages/profile/Profile';
import Sai from './pages/Sai';
import Admin from './pages2/Admin';
import Users from './pages2/Users';
import Products from './pages2/Products';
import Review from './pages2/Review';
import Feedbacks from './pages2/Feedbacks';
import Create from './pages2/Create';
import Pagenotfound from './pages2/Pagenotfound';
import About from './pages2/About';
import Invoice from './pages2/Invoicepage'
import CheckoutPage from './pages2/CheckoutPage';
import Adminlogin from './pages2/Adminlogin';
import Cart_page from './pages2/CartPage';
import Sales from './pages2/Sales';
import { CartProvider } from './pages2/CartContext';
//  import Loader from './components/loader/Loader';

function App() {
  axios.defaults.withCredentials=true;
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getLoginStatus())
  },[dispatch])
  return (
   <BrowserRouter>
   <ToastContainer/>
   <CartProvider>
   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/customerpage' element={<CustomerPage/>}/>
    {/* <Route path='/test' element={<Test/>}/> */}
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/sai" element={<Sai/>}/>
    
    <Route path='/admin' element={<Admin />} />
    <Route path='/product' element={<Create />} />
    <Route path='/cart' element={<Cart_page />} />
    {/* <Route path='/review' element={<Review />} /> */}
    <Route path='/admin/users' element={<Users />} />
    <Route path='/admin/product' element={<Products />} />
    <Route path='/admin/feedbacks' element={<Review />} />  
    <Route path='/feedback' element={<Feedbacks />} />
    <Route path='/checkout' element={<CheckoutPage />} />
    <Route path='/invoice' element={<Invoice />} />
    <Route path='/adminlogin' element={<Adminlogin />} />
    <Route path='/sales' element={<Sales />} />
    <Route path='/aboutus' element={<About />} />
    <Route path='*' element={<Pagenotfound />}  />

   
    

   </Routes>
   </CartProvider>
   {/* <Footer/> */}
   </BrowserRouter>
  );
}

export default App;
