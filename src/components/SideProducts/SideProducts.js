import React from 'react';
import './SideProducts.css';

const sideProducts = [
  { image: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/rode%20type%20c/1741784092_1849609-50x50h.jpg', title: 'Rode Wireless Micro' },
  { image: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/dji%20mic%20mini/dfbe4c53b2405bf155a05d097249ce8b@origin-50x50h.jpg', title: 'Dji Mic Mini' },
  { image: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/psa/1402402813_484972%20(1)-50x50h.jpg', title: 'Rode PSA1 bras' },
  { image: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/14m/%7BA2CFD96C-42CB-4779-AC07-EB5FA28D30FD%7D-50x50w.png', title: 'Adaptateur Smartphone' },
  { image: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/spigot/%7B8DC6A021-928F-4F50-B6F5-79B20B803CE2%7D-50x50w.png', title: 'Spigot' },
];

const SideProducts = () => {
  return (
    <div className="side-products">
      <div className='h3-div'><h4>Side Products Module</h4></div>
      {sideProducts.map((product, index) => (
        <div className="side-product" key={index}>
          <img src={product.image} alt={product.title} />
          <span>{product.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SideProducts;
