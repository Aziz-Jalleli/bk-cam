// components/ProductCard/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="search-icon">
        <span>⚲</span>
      </div>
      <a href={product.link} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <h3 className="product-name">{product.name}</h3>
      </a>
    </div>
  );
};

export default ProductCard;