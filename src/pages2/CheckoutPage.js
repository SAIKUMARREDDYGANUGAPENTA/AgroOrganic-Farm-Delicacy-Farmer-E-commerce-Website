import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './CheckOutpage.css';
import Header2 from '../components/header/Header2';
import Footer from "../components/footer/Footer"
import { useCart } from './CartContext';


const CheckoutPage = () => {
  const navigate = useNavigate();
  // Regular expressions for validation
  const { cartItems, setCartItems } = useCart();
  const cardNumberRegex = /^\d{16}$/;
  const cvvRegex = /^[0-9]{3}$/;
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const cardNumber = e.target.card_number.value;
    const cardType = e.target.card_type.value;
    // const expiryDate = e.target.exp_date.value;
    const cvv = e.target.cvv.value;

    const validationError = validateCheckoutForm(name, cardNumber, cardType, cvv);

    if (validationError) {
      setError(validationError);
    } else {
      toast.success('Thank you for your purchase');
      toast.success('Your order is placed');
      navigate('/');
    }
  };

  const validateCheckoutForm = (name, cardNumber, cardType, cvv) => {
    if (!name.trim() || !cardNumber.trim() || !cardType  || !cvv.trim()) {
      return 'All fields are required';
    }

    if (!cardNumber.match(cardNumberRegex)) {
      return 'Please enter a valid card number';
    }

 
    if (!cvv.match(cvvRegex)) {
      return 'Please enter a valid CVV';
    }
   

    // Add more specific validation rules as needed

    return null; // Return null if no validation errors
  };

  const handleOnlinePayment = () => {
    // Clear the cart items
    setCartItems([]);
    // Navigate to the checkout page after clearing cart items
    navigate('/checkout');
  };

  const calculateTotalPrice = () => {
    let subtotal = 0;

    // Calculate subtotal for all items in the cart
    cartItems.forEach((item) => {
      subtotal += ((item.product_mrp*(1-item.offer/100)).toFixed(2))* item.quantity;
    });

    const total = subtotal+200;

    return {
      subtotal: subtotal.toFixed(2),
      total: total.toFixed(2),
    };
  };
  const { subtotal, total } = calculateTotalPrice();

  return (
    <>
     <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header2/>
      </div>
    
    <div>
      <div className="mainscreen">
        <div className="card_data">
          <div className="leftside_1">
            <img src="https://t3.ftcdn.net/jpg/03/70/72/72/360_F_370727285_x2gQXerIT1g4Bv5soWCqeAqqUsnvO5bB.jpg" className="product_data" alt="Shoes" />
          </div>
          <div className="rightside">
            <form onSubmit={handleSubmit}>
              <h1>CheckOut</h1>
              <h2>Payment Information</h2>
              <p className='parag_1'>Cardholder Name</p>
              <input type="text" className="inputbox_1" name="name" required />
              <p className='parag_1'>Card Number</p>
              <input type="text" className="inputbox_1" name="card_number" id="card_number" required />
              <p className='parag_1'>Card Type</p>
              <select className="inputbox_1" name="card_type" id="card_type" required>
                <option value="">--Select a Card Type--</option>
                <option value="Visa">Visa</option>
                <option value="RuPay">RuPay</option>
                <option value="MasterCard">MasterCard</option>
              </select>
              <div className="expcvv">
                <p className="expcvv_text parag_1">Amount</p>
                <input type="text" className="inputbox_1" name="exp_date" id="exp_date" value={total} required />
                <p className="expcvv_text2 parag_1">CVV</p>
                <input type="password" className="inputbox_1" name="cvv" id="cvv" autoComplete=""  required />
              </div>
              <p />
              <button type="submit" className="button_btn" onClick={handleOnlinePayment}>CheckOut</button>
              {error && <div className="error-message">{error}</div>}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    <Footer/>
    </>
  );
};

export default CheckoutPage;
