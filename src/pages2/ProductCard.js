import React from "react";

const ProductCard = ({product , handleAddToCart}) => {
  return (
      <li key={product.id} className="product-card-create">
        <img
          className="imagess"
          src={product.product_img}
          alt={product.product_name}
        />
        <p className="product-title_1">{product.product_name}</p>
        <p><span className="product-discount">- {product.offer}% </span>&#8377; 
        <span className="selling-price">{(product.product_mrp*(1-product.offer/100)).toFixed(2)}</span></p>
        <p className="product-mrp">MRP: <s>{(product.product_mrp*1).toFixed(2)}</s></p>
        <p className="product-quantity">{product.quantity}</p>
        <button className="cta-button" onClick={() => handleAddToCart(product)}>Add to cart</button>
      </li>
  );
};

export default ProductCard;
