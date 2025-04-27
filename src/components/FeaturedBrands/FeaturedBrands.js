import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './FeaturedBrands.css'; 
export default function FeaturedBrands() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const brands = [
    { name: 'Aperture', logo: 'https://bk-cam.com/image/cache/catalog/logo%20aputure-150x150h.jpg' },
    { name: 'Benro', logo: 'https://bk-cam.com/image/cache/catalog/k2/galleries/benero-150x150h.jpg' },
    { name: 'Blackmagic Design', logo: 'https://bk-cam.com/image/cache/catalog/898/9%20BLACKMAGIC%20DESIGN/bmd_logo_cmyk-150x150w.png' },
    { name: 'Boya', logo: 'https://bk-cam.com/image/cache/catalog/logo%20boya-150x150h.jpg' },
    { name: 'Canon', logo: 'https://bk-cam.com/image/cache/catalog/demo/manufacturer/canon-150x150h.png' },
    { name: 'Colortone', logo: 'https://bk-cam.com/image/cache/catalog/898/logo%20colortone-150x150w.jpg' },
    { name: 'DJI', logo: 'https://bk-cam.com/image/cache/catalog/il_570xN.1579736687_mrs0-150x150w.jpg' },
  ];

  const handlePrev = () => {
    setActiveSlide(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActiveSlide(prev => (prev < brands.length - 6 ? prev + 1 : prev));
  };

  const totalDots = Math.max(1, brands.length - 5); 

  return (
    <div className="container1">
      <div className="header1">
        <div className="featured-btn">FEATURED BRANDS</div>
        <div className="viewall-btn">VIEW ALL</div>
        <div className="navigation">
          <button className="nav-btn" onClick={handlePrev}>
            <ChevronLeft size={16} />
          </button>
          <button className="nav-btn" onClick={handleNext}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="brands-row">
  {brands.slice(activeSlide, activeSlide + 6).map((brand, index) => (
    <div key={index} className="brand-box">
      <img src={brand.logo} alt={brand.name} className="brand-logo" />
    </div>
  ))}
</div>


      <div className="dots">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={index === activeSlide ? "dot active" : "dot"}
            onClick={() => setActiveSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
