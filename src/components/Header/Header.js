import React, { useState } from 'react';
import { navItems } from '../../data';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import './Header.css';
const videoSubcategories = [
  { 
    name: 'DIGITAL CINEMA CAMERA', 
    link: '/digital-cinema-camera',
    image: 'https://bk-cam.com/image/cache/catalog/slides/cinema%20line-250x250.jpg'
  },
  { 
    name: 'CARTE MÉMOIRE', 
    link: '/carte-memoire',
    image: 'https://bk-cam.com/image/cache/catalog/produits/carte%20memoire/micro%20sd%2064/carte-memoire-sandisk-sdxc-extreme-pro-128go-200mbs-42300121596-250x250.jpg'
  },
  { 
    name: 'CAMÉSCOPES', 
    link: '/camescopes',
    image: 'https://bk-cam.com/image/cache/catalog/k2/items/cache/ce7646a74c54cecf1c05442c71f02147_Generic-250x250.jpg'
  },
  { 
    name: 'GOPRO', 
    link: '/gopro',
    image: 'https://bk-cam.com/image/cache/catalog/produits/gopro/icon-250x250.jpg'
  },
  { 
    name: 'ENREGISTREURS ET MÉLAN', 
    link: '/enregistreurs',
    image: 'https://bk-cam.com/image/cache/catalog/atem-mini-pro-melangeur-250x250.jpg'
  },
  { 
    name: 'ACCESSOIRES VIDÉO', 
    link: '/accessoires-video',
    image: 'https://bk-cam.com/image/cache/catalog/898/9%20BLACKMAGIC%20DESIGN/accessoire%20video-250x250.jpg'
  }
];

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleExpandItem = (key, e) => {
    e.preventDefault();
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <header className="header">
      
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
          <span><PhoneIcon className="icon"/>+216 53 660 508</span>
            <span><MailIcon className="icon"/>Sales@BKcam.com</span>
            <span><StarIcon className="icon"/>Qui sommes nous</span>
            <span><LocalShippingIcon className="icon"/>+21625440740</span>
          </div>
          <div className="user-actions">
            <span><FacebookIcon className="icon"/></span>
            <span><YouTubeIcon className="icon"/></span>
            <span><InstagramIcon className="icon"/></span>
          </div>
        </div>
      </div>
      
      <div className="main-header">
        <div className="container">
          <div className="search-box">
            <input type="text" placeholder="Rechercher un produit..." />
            <button type="submit" className="search-btn"><SearchIcon className='sicon'/></button>
          </div>
          
          <div className="logo">
            <a href="/">
              <img src="/images/bkcam-logo.png" alt="BKcam Logo" />
            </a>
          </div>
          
          <div className="header-actions">
          </div>
        </div>
      </div>
      
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        <div className="container">
          <MenuIcon className="menu-icon" />
          <span className="menu-text">MENU</span>
        </div>
      </div>

      <nav className="main-navigation desktop-nav">
        <div className="container">
          <ul className="nav-menu">
            <li className='nav-item'><div className='hicon'><HomeIcon/></div></li>
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className={`nav-item ${item.subItems ? "has-dropdown" : ""}`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={item.link} className="nav-link">
                  {item.name}
                  {item.subItems && <span className="arrow-icon"></span>}
                </a>
                
                {item.name === "VIDÉO" && hoveredItem === "VIDÉO" && (
                  <div className="dropdown-container video-dropdown">
                    <div className="dropdown-menu">
                      {videoSubcategories.map((subItem, subIndex) => (
                        <div key={subIndex} className="subcategory-item">
                          <a href={subItem.link} className="subcategory-link">
                            <div className="subcategory-name">{subItem.name}</div>
                            <div className="subcategory-image">
                              <img src={subItem.image} alt={subItem.name} />
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {item.name !== "VIDÉO" && item.subItems && hoveredItem === item.name && (
                  <div className="vertical-dropdown-container">
                    <ul className="vertical-dropdown-menu">
                      {item.subItems.map((subItem, subIndex) => (
                        <li 
                          key={subIndex} 
                          className={`vertical-dropdown-item ${subItem.hasSubmenu ? "has-submenu" : ""}`}
                          onMouseEnter={() => setHoveredSubItem(subItem.name)}
                          onMouseLeave={() => setHoveredSubItem(null)}
                        >
                          <a href={subItem.link} className="vertical-dropdown-link">
                            {subItem.name}
                            {subItem.hasSubmenu && <KeyboardArrowRightIcon className="submenu-arrow" />}
                          </a>
                          
                          {/* Third level submenu */}
                          {subItem.hasSubmenu && hoveredSubItem === subItem.name && (
                            <ul className="submenu">
                              {subItem.submenu.map((submenuItem, submenuIndex) => (
                                <li key={submenuIndex} className="submenu-item">
                                  <a href={submenuItem.link} className="submenu-link">
                                    {submenuItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      <nav className={`mobile-navigation ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-item home-item">
              <a href="/" className="mobile-nav-link">
                <HomeIcon />
              </a>
            </li>
            
            {navItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <div className="mobile-nav-link-wrapper">
                  <a href={item.link} className="mobile-nav-link">
                    {item.name}
                  </a>
                  {item.subItems && (
                    <button 
                      className="expand-btn"
                      onClick={(e) => toggleExpandItem(item.name, e)}
                    >
                      <AddIcon className={expandedItems[item.name] ? 'rotate' : ''} />
                    </button>
                  )}
                </div>
                
                {item.subItems && expandedItems[item.name] && (
  <ul className="mobile-submenu">
    {item.subItems.map((subItem, subIndex) => (
      <li key={subIndex} className="mobile-submenu-item">
        <div className="mobile-submenu-link-wrapper">
          <a href={subItem.link} className="mobile-submenu-link">
            {subItem.name}
          </a>
          {subItem.hasSubmenu && (
            <button 
              className="expand-btn"
              onClick={(e) => toggleExpandItem(`${item.name}-${subItem.name}`, e)}
            >
              <AddIcon className={expandedItems[`${item.name}-${subItem.name}`] ? 'rotate' : ''} />
            </button>
          )}
        </div>

        {/* Sous-sous-menu */}
        {subItem.hasSubmenu && expandedItems[`${item.name}-${subItem.name}`] && (
          <ul className="mobile-subsubmenu">
            {subItem.submenu.map((submenuItem, submenuIndex) => (
              <li key={submenuIndex} className="mobile-subsubmenu-item">
                <a href={submenuItem.link} className="mobile-subsubmenu-link">
                  {submenuItem.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)}

              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;