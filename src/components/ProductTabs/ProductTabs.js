import { useState } from 'react';
import './ProductTabs.css'; 

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('recent');

  const recentProducts = [
    { id: 1, title: 'Gopro Hero9 Black Caméra', frontImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/rode%20type%20c/1741784092_1849609-228x228.jpg',
      backImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/rode%20type%20c/%7BA1513AB4-6BDB-4C0F-9B6A-5EDD5B0EC2AF%7D-228x228.png' },
    { id: 2, title: 'Dji Mic Mini', frontImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/dji%20mic%20mini/dfbe4c53b2405bf155a05d097249ce8b@origin-228x228.jpg',
      backImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/dji%20mini/pic-2-1-228x228.jpg' },
    { id: 3, title: 'Rode PSA1', frontImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/psa/1402402813_484972%20(1)-228x228.jpg',
      backImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/psa/1481115758_IMG_398278-228x228.jpg' },
    { id: 4, title: 'Adaptateur Smartphone', frontImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/14m/%7BA2CFD96C-42CB-4779-AC07-EB5FA28D30FD%7D-228x228.png',
      backImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/14m/%7BAAC0D91B-AA0E-457D-BDB9-267903BC75EF%7D-228x228.png' },
    { id: 5, title: 'Sony A6400 + objectif 16-50', frontImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/spigot/%7B8DC6A021-928F-4F50-B6F5-79B20B803CE2%7D-228x228.png',
      backImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/spigot/%7B2CAF8AC8-007A-4408-8454-793328C15BAA%7D-228x228.png' }
  ];

  const consultedProducts =  [
    { id: 4, title: 'Sony A6400 + objectif 16-50', frontImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/spigot/%7B8DC6A021-928F-4F50-B6F5-79B20B803CE2%7D-228x228.png',
      backImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/spigot/%7B2CAF8AC8-007A-4408-8454-793328C15BAA%7D-228x228.png' },
   
   
    { id: 1, title: 'Rode PSA1', frontImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/psa/1402402813_484972%20(1)-228x228.jpg',
      backImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/psa/1481115758_IMG_398278-228x228.jpg' },
    { id: 2, title: 'Adaptateur Smartphone', frontImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/14m/%7BA2CFD96C-42CB-4779-AC07-EB5FA28D30FD%7D-228x228.png',
      backImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/14m/%7BAAC0D91B-AA0E-457D-BDB9-267903BC75EF%7D-228x228.png' },
      { id: 5, title: 'Dji Mic Mini', frontImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/dji%20mic%20mini/dfbe4c53b2405bf155a05d097249ce8b@origin-228x228.jpg',
        backImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/dji%20mini/pic-2-1-228x228.jpg' },
    { id: 3, title: 'Gopro Hero9 Black Caméra', frontImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/rode%20type%20c/1741784092_1849609-228x228.jpg',
      backImage: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/rode%20type%20c/%7BA1513AB4-6BDB-4C0F-9B6A-5EDD5B0EC2AF%7D-228x228.png' },
  ];

  return (
    <div className="tabs-container">
    <div className="product-tabs-container">
      <div className="tabs-header">
        <button 
          className={`tab-button recent ${activeTab === 'recent' ? 'active' : ''}`}
          onClick={() => setActiveTab('recent')}
        >
          LES PLUS RÉCENTS
        </button>
        <button 
          className={`tab-button consulted ${activeTab === 'consulted' ? 'active' : ''}`}
          onClick={() => setActiveTab('consulted')}
        >
          LES PLUS CONSULTÉS
        </button>
      </div>

      <div className="products-grid">
        {recentProducts.map((product) => (
          <div 
            key={product.id} 
            className={`product-card ${activeTab === 'recent' ? 'zoom-in' : 'zoom-out'}`}
          >
            <div className="card-inner">
                <div className="card-front">
                  <img src={product.frontImage} alt={product.title} className="product-image" />
                </div>
                <div className="card-back">
                  <img src={product.backImage} alt={product.title} className="product-image" />
                </div>
              </div>
            <p className="product-title">{product.title}</p>
          </div>
        ))}
        
        {consultedProducts.map((product) => (
          <div 
            key={product.id} 
            className={`product-card ${activeTab === 'consulted' ? 'zoom-in' : 'zoom-out'}`}
          >
            <div className="card-inner">
                <div className="card-front">
                  <img src={product.frontImage} alt={product.title} className="product-image" />
                </div>
                <div className="card-back">
                  <img src={product.backImage} alt={product.title} className="product-image" />
                </div>
              </div>
            <p className="product-title">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
