import React from 'react';
import CategorySidebar from '../CategorySidebar/CategorySidebar';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import SideProducts from '../SideProducts/SideProducts';
import FeaturedBrands from '../FeaturedBrands/FeaturedBrands';
import Gallery from '../Gallery/Gallery';
import ConsProd from '../ConsProd/ConsProd';


import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <aside className="sidebar">
        <CategorySidebar />
        <SideProducts />
        <Gallery/>
        <ConsProd/>
      </aside>

      <main className="main-content">
        <HeroCarousel />
        <FeaturedBrands/>
      </main>
    </div>
  );
};

export default Homepage;
