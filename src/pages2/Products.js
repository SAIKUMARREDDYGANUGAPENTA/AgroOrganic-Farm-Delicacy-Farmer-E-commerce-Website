import React, { useState,useEffect } from 'react';
import './admin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { SiProducthunt } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";


function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  // Static product data
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/data2")
      .then(res => {
        setProductData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(productData)
  // Filter products based on the search term
  const filteredProducts = productData.filter(product =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("sai",filteredProducts)

  return (
    <div className='products_1'>
        
<div className="sidebar_1">
<a href="/">  <h1>Dashboard</h1> </a>

        <ul>
        <li> <Link to={'/admin'}><IoMdHome /> Home</Link></li>
      <li> <Link to={"/admin/users"}><FaUsers /> Users</Link></li>
      <li><Link to={"/admin/product"}> <SiProducthunt /> Products</Link></li>
      <li><Link to={"/admin/feedbacks"}> <VscFeedback /> Feed Backs</Link></li>
      <li><Link to={"/"}><CiLogout /> Logout</Link></li>
        </ul>
      </div>
      <h1 className='searchbar'>Product Details</h1>
      <input className='search_1'
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2>Products</h2>
      <div className="product_cards">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            
          <p className='str'><strong>Name:</strong> {product.product_name}</p>
          <p className='str'><strong>Price:</strong> {parseFloat(product.product_mrp).toFixed(2)}</p>
          <p className='str'><strong>Selling Price:</strong> {parseFloat((product.product_mrp*(1-product.offer/100)).toFixed(2)).toFixed(2)}</p>
          <p className='str'><strong>Quantity:</strong> {product.quantity}</p>
          <p className='str'><strong>Offer: </strong> {parseFloat(product.offer).toFixed(2)}%</p>
          </div>
        ))}
      </div>
      <div className='Footer'>
         
         &copy; {} All Rights Reserved
        
     </div>
    </div>
  );
}

export default Products;
