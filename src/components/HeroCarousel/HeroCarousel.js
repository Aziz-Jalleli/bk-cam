import { useState,useEffect } from 'react';
import './HeroCarousel.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CameraFrontIcon from '@mui/icons-material/CameraFront';export default function HeroCarousel() {
  const texts = [
    { icon: <CameraFrontIcon className='icon' />,text:"Nous constituons pour vous des kits appareil photo sur mesure, permettant à chaque photographe amateur ou professionnel de trouver l'équipement photo qui lui correspond."},
    { icon: <LocalShippingIcon className='icon' />,text:"Commandez Ajourd'hui , Aux Meilleurs Prix."},
    { icon: <HelpOutlineIcon  className='icon'/>,text: "Spécialiste Photo et vidéo Distributeur des plus grandes marques comme Canon, Nikon, Sony, Pentax..."}
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

    const slides = [
        {
          image: 'https://bk-cam.com/image/cache/catalog/bk-1600x594.jpg',
          title: 'BKpro',
          subtitle: '',
        },
        {
          image: 'https://bk-cam.com/image/cache/catalog/ECLAIRAGE-230x180.jpg',
          title: 'BKpro',
          subtitle: 'service vidéo',
        },
        {
          image: 'https://bk-cam.com/image/cache/catalog/video-230x180.jpg',
          title: 'BKpro',
          subtitle: 'service vidéo',
        },
      ];
  return (
    <div className="bkpro-container">
      <div className="bkpro-header">
      <p className="bkpro-text" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ marginRight: "8px" }}>{texts[currentIndex].icon}</span>
        {texts[currentIndex].text}
      </p>
      </div>
      
      <div className="bkpro-panels">
        <div className="bkpro-panel-large">
          <div className="bkpro-logo">
            <span>BKpro</span>
            <sup className="bkpro-star">*</sup>
          </div>
          <div className="bkpro-photographer-image">
          </div>
        </div>
        
        <div className="bkpro-panel-small">
          <div className="bkpro-logo">
            <span>BKpro</span>
            <sup className="bkpro-star">*</sup>
          </div>
          <div className="bkpro-service-text">
            <span>service vidéo</span>
          </div>
          <div className="bkpro-camera-image">
          </div>
        </div>
        
        <div className="bkpro-panel-small">
          <div className="bkpro-logo">
            <span>BKpro</span>
            <sup className="bkpro-star">*</sup>
          </div>
          <div className="bkpro-service-text">
            <span>service vidéo</span>
          </div>
          <div className="bkpro-camera-image2">
          </div>
        </div>
      </div>
    </div>
  );
}