import React from 'react';
import './Footer.css'; // We'll create this CSS file next
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { PhoneIcon } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social-icons">
          <div className='social'><a href="#"><FacebookIcon className='icon'/></a></div>
          <div className='social'><a href="#"><YouTubeIcon className='icon'/></a></div>
          <div className='social'><a href="#"><InstagramIcon className='icon'/></a></div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>A PROPOS</h3>
          <p>
            BKcam Tunisie est une société spécialisée dans la vente et location de matériel audiovisuel professionnel.<br />
            Notre offre très diversifiée, et sans cesse enrichie, propose les modèles des grandes marques comme canon Tunisie, nikon, Sony Tunisie.Sa seul défi de BKcam Tunisie c’est de fournir à sa clientèle les plus grandes marques à prix imbattable
          </p>
        </div>

        <div className="footer-section">
          <h3>ADRESSES</h3>
          <p><span role="img" aria-label="phone"><PhoneIcon className='icon'></PhoneIcon></span> Tunis : 53 660 508</p>
          <p><span role="img" aria-label="fax"><PhoneIcon className='icon'></PhoneIcon></span> Fax : 52 990 111</p>
          <p><span role="img" aria-label="location"><LocationOnIcon className='icon'></LocationOnIcon></span> 3 rue amine el abbass Tunis - Tunisie</p>
          <p><span role="img" aria-label="location"><LocationOnIcon className='icon'></LocationOnIcon></span> Rue Monji Bali bab bhar -5Fax Tunisie</p>
          <p><a href="#" className="welcome-link">Accueil</a></p>
        </div>

        {/* Information Section */}
        <div className="footer-section">
          <h3>INFORMATION</h3>
          <ul>
            <li><a href="#">Qui sommes nous</a></li>
            <li><a href="#">Informations de livraison</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Termes et Conditions</a></li>
            <li><a href="#">Nous contacter</a></li>
            <li><a href="#">Fabricants</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>NEWSLETTER</h3>
          <p>Reste informer</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Adresse Email..." required />
            <button type="submit">ENVOYEZ</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;