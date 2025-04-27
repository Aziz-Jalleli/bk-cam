
export const navItems = [
    { 
      name: 'PHOTO', 
      link: '#', 
      subItems: [
        { name: "Appareils", link: "/appareils", hasSubmenu: true, submenu: [
          { name: "canon", link: "/appareils/canon" },
          { name: "nikon", link: "/appareils/nikon" },
          { name: "sony", link: "/appareils/sony" }
        ]},
        { name: "Objectifs", link: "/objectifs", hasSubmenu: true, submenu: [
          { name: "Nikon", link: "/objectifs/nikon" },
          { name: "Canon", link: "/objectifs/canon" },
          { name: "Sony", link: "/objectifs/sony" }
        ]},
        { name: "Flash Cobra", link: "/flash-cobra", hasSubmenu: true, submenu: [
          { name: "Nikon", link: "/flash-cobra/nikon" },
          { name: "Canon", link: "/flash-cobra/canon" },
          { name: "Sony", link: "/flash-cobra/sony" }
        ]},
        { name: "Batterie & Chargeur", link: "/batterie-chargeur", hasSubmenu: false }
      ]
    },
    {
      name: "VIDÉO",
      link: "/video",
      subItems: [
        { name: "DIGITAL CINEMA CAMERA", link: "/video/digital-cinema-camera" },
        { name: "CARTE MÉMOIRE", link: "/video/carte-memoire" },
        { name: "CAMÉSCOPES", link: "/video/camescopes" },
        { name: "GOPRO", link: "/video/gopro" },
        { name: "ENREGISTREURS ET MÉLANGEURS", link: "/video/enregistreurs-melangeurs" },
        { name: "ACCESSOIRES VIDÉO", link: "/video/accessoires" },
      ],
    },
    {
      name: 'ÉCLAIRAGE',
      link: '#',
      subItems: [
        { 
          name: "Flash de studio et accessoires", 
          link: "#", 
          hasSubmenu: true, 
          submenu: [
            { name: "Flash de studio", link: "#" },
            { name: "Déclencheur de flash", link: "#" },
            { name: "Softbox Parapluies", link: "#" },
            { name: "Accessoires Divers", link: "#" }
          ]
        },
        { name: "Lumière Continue", link: "#", hasSubmenu: false },
        { name: "Torches LED", link: "#", hasSubmenu: false },
        { name: "Fonds de studio photo", link: "#", hasSubmenu: false },
        { 
          name: "Softbox et Accessoires", 
          link: "#", 
          hasSubmenu: true, 
          submenu: [
            { name: "Softbox Parapluies", link: "#" },
            { name: "Boîte à lumière et Réflecteurs", link: "#" },
            { name: "Pied d'éclairage", link: "#" },
            { name: "Accessoires Divers", link: "#" }
          ]
        }
      ]
    },
     
    
    { 
      name: 'AUDIO', link: '#',
      subItems: [
        { name: "Microphones", link: "Microphones", hasSubmenu: false},
        { name: "Equipement de Podcast", link: "", hasSubmenu: false},
        { name: " Microphone sans fil", link: "", hasSubmenu: false},
        { name: "Enregistreurs et adaptateurs", link: "", hasSubmenu: false},
        { name: "Accessoire", link: "", hasSubmenu: false}
      ]},

    
    { 
      name: 'TRÉPIEDS', link: '#', 
      subItems: [
        { name: "Trépied", link: "Microphones", hasSubmenu: false},
        { name: "Monopode", link: "", hasSubmenu: false},
        { name: " Trépied flexible", link: "", hasSubmenu: false},
        { name: "Accessoire", link: "", hasSubmenu: false}
      ]},
    { 
      name: 'STABILISATEURS', link: '#', 
      subItems: [
        { name: "Stabilisateur Appareil photo", link: "", hasSubmenu: false},
        { name: "Stabilisateur Smartphone", link: "", hasSubmenu: false}
      ]},
    { name: 'HOUSSES', link: '#' },
    { name: 'MACHINERIE', link: '#' }
  ];
  
  export const sliderData = [
    {
      id: 1,
      title: 'DJI RS 4',
      image: 'https://bk-cam.com/image/cache/catalog/slides/ad300-1550x568.jpg',
      isActive: true
    },
    {
      id: 2,
      title: 'Camera Stabilizer',
      image: 'https://bk-cam.com/image/cache/catalog/slides/boule%20chinoise-2036x852.jpg',
      isActive: false
    },
    {
      id: 3,
      title: 'Professional Audio',
      image: 'https://bk-cam.com/image/cache/catalog/slides/cine%20line-2036x852.jpg',
      isActive: false
    }
  ];
  
  export const promotionData = [
    {
      id: 1,
      image: 'https://bk-cam.com/image/cache/catalog/slides/promo%202-1200x800.jpg',
      alt: 'New Year Sale DJI',
      link: '#'
    },
    {
      id: 2,
      image: 'https://bk-cam.com/image/cache/catalog/promo/promo%201-1200x800.jpg',
      alt: 'New Year Sale Microphones',
      link: '#'
    },
    {
      id: 3,
      image: 'https://bk-cam.com/image/cache/catalog/promo/promo%20eimage-1200x800.jpg',
      alt: 'New Year Sale Tripods',
      link: '#'
    },
    {
      id: 4,
      image: 'https://bk-cam.com/image/cache/catalog/promo/promo%20gorrila-1200x800.jpg',
      alt: 'New Year Sale Accessories',
      link: '#'
    }
  ];
  
  export const productData = [
    { id: 1, name: 'Rode Wireless Micro+ Kit Dual', image: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/rode%20type%20c/1741784092_1849609-228x228.jpg', link: '#' },
    { id: 2, name: 'DJI Mic 650 (1 TX + 1 RX)', image: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/dji%20mic%20mini/dfbe4c53b2405bf155a05d097249ce8b@origin-228x228.jpg', link: '#' },
    { id: 3, name: 'Rode PSA1+ bras articulé pour microphone', image: 'https://bk-cam.com/image/cache/catalog/produits/0%20nouvelle%20arrivage/psa/1402402813_484972%20(1)-228x228.jpg', link: '#' },
    { id: 4, name: 'Adaptateur Smartphone - Sidearm', image: '/images/products/adaptateur.jpg', link: '#' },
    { id: 5, name: 'Support', image: '/images/products/support.jpg', link: '#' },
    { id: 6, name: 'Godox CMC-A-01 - L-Form Shoe Adapter', image: '/images/products/godox.jpg', link: '#' },
    { id: 7, name: 'Nikon batterie EN-EL15c', image: '/images/products/nikon-battery.jpg', link: '#' },
    { id: 8, name: 'Canon LP-E17 Original', image: '/images/products/canon-battery.jpg', link: '#' },
    { id: 9, name: 'Rode Shotgun microphone directional', image: '/images/products/rode-shotgun.jpg', link: '#' },
    { id: 10, name: 'DJI RS 4 Pro', image: '/images/products/dji-rs4-pro.jpg', link: '#' },
    { id: 11, name: 'DJI RS 4 Mini', image: '/images/products/dji-rs4-mini.jpg', link: '#' },
    { id: 12, name: 'Sony Alpha 7 - Digital Camera', image: '/images/products/sony-alpha.jpg', link: '#' },
    { id: 13, name: 'Sony Betacam CineAlt 4K', image: '/images/products/sony-betacam.jpg', link: '#' },
    { id: 14, name: 'Sony FX6 - Cinema Line', image: '/images/products/sony-fx6.jpg', link: '#' },
    { id: 15, name: 'Sony FX9 - Cinema Line', image: '/images/products/sony-fx9.jpg', link: '#' },
    { id: 16, name: 'Godox S2T SpeedLite 2 power 360W', image: '/images/products/godox-s2t.jpg', link: '#' }
  ];
  
  export const categoryData = [
    { id: 1, name: 'Catégories', count: 214 },
    { id: 2, name: 'Éclairage', count: 155 },
    { id: 3, name: 'Photo', count: 112 },
    { id: 4, name: 'Trépieds', count: 108 },
    { id: 5, name: 'Audio', count: 104 },
    { id: 6, name: 'Custom Views', count: null }
  ];
  
  export const brandData = [
    { id: 1, name: 'Aputure', image: '/images/brands/aputure.jpg', link: '#' },
    { id: 2, name: 'Benro', image: '/images/brands/benro.jpg', link: '#' },
    { id: 3, name: 'Boya', image: '/images/brands/boya.jpg', link: '#' },
    { id: 4, name: 'Canon', image: '/images/brands/canon.jpg', link: '#' },
    { id: 5, name: 'SmallRig', image: '/images/brands/smallrig.jpg', link: '#' },
    { id: 6, name: 'DJI', image: '/images/brands/dji.jpg', link: '#' }
  ];
  
  export const galleryData = [
    { id: 1, image: '/images/gallery/img1.jpg', alt: 'Camera equipment' },
    { id: 2, image: '/images/gallery/img2.jpg', alt: 'Professional setup' },
    { id: 3, image: '/images/gallery/img3.jpg', alt: 'Lighting equipment' },
    { id: 4, image: '/images/gallery/img4.jpg', alt: 'Audio recording' },
    { id: 5, image: '/images/gallery/img5.jpg', alt: 'Studio setup' },
    { id: 6, image: '/images/gallery/img6.jpg', alt: 'Outdoor filming' }
  ];
  
  export const footerLinks = [
    {
      title: 'INFORMATION',
      links: [
        { name: 'CGV', url: '#' },
        { name: 'Information de livraison', url: '#' },
        { name: 'Politique de confidentialité', url: '#' },
        { name: 'Nous contacter', url: '#' },
        { name: 'Plan du site', url: '#' },
        { name: 'FAQ', url: '#' }
      ]
    }
  ];
  