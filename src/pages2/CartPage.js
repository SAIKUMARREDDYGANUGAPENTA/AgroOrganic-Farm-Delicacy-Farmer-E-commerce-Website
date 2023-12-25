import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import './cartPage.css';
import { MdDeleteForever } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Header2 from '../components/header/Header2';
import Footer from "../components/footer/Footer"

const CartPage = () => {
  const { cartItems, removeFromCart, incrementP, decrementP } = useCart();
  const [updatedCartItems, setUpdatedCartItems] = useState([]);

  useEffect(() => {
    const updatedItems = cartItems.map((item) => ({
      ...item,
      quantity: item.quantity !== undefined ? item.quantity : 1,
    }));
    setUpdatedCartItems(updatedItems);
  }, [cartItems]);

  const handleIncrement = (itemId) => {
    const updatedItems = updatedCartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    incrementP(itemId);
    setUpdatedCartItems(updatedItems);
  };

  const handleDecrement = (itemId) => {
    const updatedItems = updatedCartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    decrementP(itemId);
    setUpdatedCartItems(updatedItems);
  };

  const handleDelete = (itemId) => {
    const updatedItems = updatedCartItems.filter((item) => item.id !== itemId);
    setUpdatedCartItems(updatedItems);
    removeFromCart(itemId);
  };

  
  

 
  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce(
      (total, item) =>
        total +
        (parseFloat((item.product_mrp*(1-item.offer/100)).toFixed(2)) || 0) * item.quantity,
      0
    );

    
    const deliveryCharges = totalPrice > 5000 ? 0 : 200;

    return {
      totalPrice: (totalPrice*1).toFixed(2),
      finalPrice: (totalPrice+deliveryCharges).toFixed(2),
      deliveryCharges: (deliveryCharges*1).toFixed(2),
    };
  };

  const { totalPrice, deliveryCharges, finalPrice } = calculateTotalPrice(updatedCartItems);

  return (
    <>
     <div style={{position:'fixed', width:'100%', zIndex:'9999', top:'0' }}>
      <Header2/>
      </div>
   
    <div className='body_class_10'>
      
  <div className="card_50">
  <div className="row">
    <div className="col-md-8 cart_50">
      <div className="title">
        <div className="row">
          <div className="col"><h4><b>Shopping Cart</b></h4></div>
          <div className="col align-self-center text-right text-muted">items : {updatedCartItems.length} </div>
        </div>
      </div>
      {updatedCartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        updatedCartItems.map((item) => (
          <div key={item.id} className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2"><img className="imges-fluid" src={item.product_img} alt={item.product_name} /></div>
              <div className="col">
                <div className="row text-muted">{item.product_type}</div>
                <div className="row">{item.product_name}</div>
              </div>
              <div className='col'>
              <div className="row text-muted"> Price</div>
              <div className="row">&#8377; {(item.product_mrp*(1-item.offer/100)).toFixed(2)}</div>
              </div>
              
              <div className="col">
              <div className="row text-muted">  Quantity</div>
                <div>
                <span className='spanclass1' onClick={() => handleDecrement(item.id)}><CiSquareMinus /></span>
                <span className="border">{item.quantity}</span>
                <span className='spanclass2'  onClick={() => handleIncrement(item.id)}><CiSquarePlus /></span>
              </div>
              </div>
              <div className='col'>
              <div className="row text-muted">Total price</div>
              <div className="row">&#8377; {(item.product_mrp*(1-item.offer/100) * item.quantity).toFixed(2)}</div>
              </div>
              <div>
              <span  className="close spanclass" onClick={() => handleDelete(item.id)}><MdDeleteForever /></span>
                </div>
            </div>
          </div>
        ))
      )}
    </div>
    <div className="col-md-4 summary_99">
      <div><h5><b>Summary</b></h5></div>
      <div className='spacebt'>
      <hr className='hrtag' />
      <div className="row">
        <div className="col" style={{ paddingLeft: 0 }}>ITEMS : {updatedCartItems.length}</div>
        <div className="col text-right">&#8377; {totalPrice}</div>
      </div>
      </div>
      {deliveryCharges > 0 && (
        <div className='spacebt'>
        <div className='row'>
          <div className="col" style={{ paddingLeft: 0 }}>DELIVERYCHARGES</div>
          <div className="col text-right">&#8377; {deliveryCharges}</div>
         
        </div>
        </div>
      )}
      <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
        <div className="col">TOTAL PRICE</div>
        <div className="col text-right">&#8377; {finalPrice}</div>
      </div>
      <Link to='/invoice'><button className="btn" >CHECKOUT</button></Link>
      
    </div>
  </div>
</div>

    </div>
    <Footer/>
    </>
  );
};

export default CartPage;
