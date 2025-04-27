import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSection.css';

const ProductSection = ({ title, products = [] }) => {
  return (
    <section className="product-section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
        </div>

        <div className="products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>Aucun produit disponible.</p> 
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
