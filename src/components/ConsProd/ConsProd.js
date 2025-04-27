import React from 'react';
import './ConsProd.css';

const sideProducts = [
  { image: 'https://bk-cam.com/image/cache/catalog/produits/gopro/hero9/gopro-camera-action-hero9-black-1-16-50x50h.jpg', title: ' Gopro Hero9 Black Caméra d action' },
  { image: 'https://bk-cam.com/image/cache/catalog/898/9%20BLACKMAGIC%20DESIGN/BLACKMAGIC%20DESIGN%20%20Tunisie%20ATEM%20Mini%20Pro%20ISO-50x50h.jpg', title: 'Blackmagic Design ATEM Mini' },
  { image: 'https://bk-cam.com/image/cache/catalog/901/FX%20F%20DJI/DJI%20Tunisie%20Osmo%20Pocket-50x50h.jpg', title: 'DJI OSMO Pocket Stabilisateur' },
  { image: 'https://bk-cam.com/image/cache/catalog/901/fx%20h%20BOYA/BOYA%20BY-M1-50x50h.jpg', title: 'BOYA BY-M1 Micro cravate professionnel' },
  { image: 'https://bk-cam.com/image/cache/catalog/produits/appareil%20sony%20/a6400/sony-alpha-6400-kit-16-50-2-97-50x50h.jpg', title: 'Sony A6400 + objectif 16-50 mm' },
];

const ConsProd = () => {
  return (
    <div className="side-products">
      <div className='h3-div'><h4>Les plus consultés</h4></div>
      {sideProducts.map((product, index) => (
        <div className="side-product" key={index}>
          <img src={product.image} alt={product.title} />
          <span>{product.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ConsProd;
