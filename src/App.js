
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import PromotionBanner from './components/PromotionBanner/PromotionBanner';
import ProductTabs from './components/ProductTabs/ProductTabs';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import scroll from './components/scroll/scroll';
import { throttle } from 'lodash';

import { productData, categoryData, brandData, promotionData, galleryData } from './data';
const recentProducts = [
  { id: 1, name: 'Produit Récent 1', image: '	https://bk-cam.com/image/cache/catalog/produits/0%…ge/rode%20type%20c/1741784092_1849609-228x228.jpg', link: '#' },
  { id: 2, name: 'Produit Récent 2', image: '	https://bk-cam.com/image/cache/catalog/produits/0%…ge/rode%20type%20c/1741784092_1849609-228x228.jpg', link: '#' },
  { id: 3, name: 'Produit Récent 3', image: '	https://bk-cam.com/image/cache/catalog/produits/0%…ge/rode%20type%20c/1741784092_1849609-228x228.jpg', link: '#' },
  { id: 4, name: 'Produit Récent 4', image: '	https://bk-cam.com/image/cache/catalog/produits/0%…ge/rode%20type%20c/1741784092_1849609-228x228.jpg', link: '#' },
];

const popularProducts = [
  { id: 5, name: 'Produit Populaire 1', image: '/images/prod5.jpg', link: '#' },
  { id: 6, name: 'Produit Populaire 2', image: '/images/prod6.jpg', link: '#' },
  { id: 7, name: 'Produit Populaire 3', image: '/images/prod7.jpg', link: '#' },
  { id: 8, name: 'Produit Populaire 4', image: '/images/prod8.jpg', link: '#' },
];



function App() {
  const [scrollY, setScrollY] = useState(0);

 
useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <div className="app">
      
      
      <Header />
      <main>
        <HeroSlider />
        <PromotionBanner promotions={promotionData} />
        <ProductTabs/>
        <Homepage/>
      </main>
      <div
    className="my-div"
    style={{
      backgroundPositionY: `-${scrollY}px`
    }}
  >
  </div>
      
    
      <Footer/>
        
      
    </div>
  );
}

export default App;