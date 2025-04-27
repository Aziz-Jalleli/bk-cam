import React, { useState, useEffect } from 'react';
import { sliderData } from '../../data';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide =>
        prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide(prevSlide =>
        prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); 
  
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="hero-slider">
      <div className="slider-container">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.title} className="background-image" />
            <div className="overlay-content">
              
              {slide.overlayImage && (
                <img
                  src={slide.overlayImage}
                  alt="Overlay"
                  className="overlay-image"
                />
              )}
            </div>
          </div>
        ))}

        <button className="slider-arrow prev" onClick={goToPrevSlide}>
          &lt;
        </button>
        <button className="slider-arrow next" onClick={goToNextSlide}>
          &gt;
        </button>

        <div className="slider-squares">
          {sliderData.map((_, index) => (
            <button
              key={index}
              className={`square ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="slider-progress-bar">
            <div key={currentSlide} className="progress-fill" />
      </div>
    </div>
  );
};

export default HeroSlider;