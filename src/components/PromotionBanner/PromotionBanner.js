// components/PromotionBanner/PromotionBanner.js
import React from 'react';
import './PromotionBanner.css';

const PromotionBanner = ({ promotions }) => {
  return (
    <div className="promotion-banner">
      <div className="container">
        <div className="promotions-grid">
          {promotions.map(promo => (
            <div key={promo.id} className="promo-item">
              <a href={promo.link}>
                <img src={promo.image} alt={promo.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;