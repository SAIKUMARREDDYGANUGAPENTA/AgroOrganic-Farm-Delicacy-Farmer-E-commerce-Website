import React from 'react';
import './invoice.css';
import { useCart } from './CartContext';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header2 from '../components/header/Header2';
import Footer from "../components/footer/Footer"


const Invoicepage = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useCart();
  const currentDateIST = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
  });

  

  const handleCashOnDelivery = () => {
    // Clear the cart items
    setCartItems([]);
    toast.success('You order is placed')
    // Navigate to home after clearing cart items
    navigate('/');
  };

  const handleOnlinePayment = () => {
    // Clear the cart items
    
    // Navigate to the checkout page after clearing cart items
    navigate('/checkout');
  };

  // Function to calculate total price based on cart items
  const calculateTotalPrice = () => {
    let subtotal = 0;

    // Calculate subtotal for all items in the cart
    cartItems.forEach((item) => {
      subtotal += ((item.product_mrp*(1-item.offer/100)).toFixed(2))* item.quantity;
    });

    const total = subtotal;

    return {
      subtotal: subtotal.toFixed(2),
      total: total.toFixed(2),
    };
  };
  const { subtotal, total } = calculateTotalPrice();
  
  const handlePrint = () => {
    window.print(); // Trigger the browser's print functionality
  };
  return (
    <>
     <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header2/>
      </div>
    <div className="invoice_5">
      <header className="header_9">
        <h1>Invoice</h1>
        
        <div className="invoice-details">
          <div className="details_9">
            <p>Date: {currentDateIST}</p>
            
          
            <p>Argo-Organic Farm Delicacy</p>
            <p>123 Address SriCity</p>
            <p>India</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </header>
      <main className="main">
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>&#8377;{(item.product_mrp*(1-item.offer/100)).toFixed(2)}</td>
                <td>&#8377;{(item.product_mrp*(1-item.offer/100) * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer className="footer_1">
        <div className="footer-details">
          <p >Subtotal: &#8377;{subtotal}</p>
          <p>Delivery Charges: &#8377;200.00</p>
          <p>Total: &#8377;{(total*1+200).toFixed(2)}</p>
        </div>
        <div>
        <button className='btn_class'  onClick={handlePrint}>Download</button>

          <button className='btn_class' onClick={handleCashOnDelivery}>Cash on Delivery</button>
          <button className='btn_class'  onClick={handleOnlinePayment}>Online Pay</button>
        </div>
      </footer>
      <ToastContainer />
    </div>
    <Footer/>
    </>
  );
};

export default Invoicepage;
