import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    {
      url: 'https://bk-cam.com/image/cache/catalog/photo-200x200h.jpg',
      alt: 'Group of cameras with lights',
      overlay: null,
    },
    {
      url: 'https://bk-cam.com/image/cache/catalog/canon-200x200h.jpg',
      alt: 'Camera lens with light flare',
      overlay: null,
    },
    {
      url: 'https://bk-cam.com/image/cache/catalog/nikon-200x200h.jpg',
      alt: 'Nikon camera on yellow background',
      overlay: null,
    },
    {
      url: 'https://bk-cam.com/image/cache/catalog/photo-200x200h.jpg',
      alt: 'Nikon D5300 on yellow background',
      overlay: null,
    },
    
    {
      url: 'https://bk-cam.com/image/cache/catalog/nikon2-200x200h.jpg',
      alt: 'Close-up of camera lens',
      overlay: null,
    },
    {
      url: 'https://bk-cam.com/image/cache/no_image-200x200h.png',
      alt: 'Placeholder',
      overlay: null,
    },
    
    {
        url: 'https://bk-cam.com/image/cache/catalog/can-200x200h.jpg',
        alt: 'Person holding camera',
        overlay: null,
    },
    {
        url: 'https://bk-cam.com/image/cache/catalog/benro-200x200h.jpg',
        alt: 'Person holding camera',
        overlay: null,
    },
    {
        url: 'https://bk-cam.com/image/cache/catalog/sony-200x200h.jpg',
        alt: 'Person holding camera',
        overlay: null,
    },

  ];

  return (
    <div className="photo-gallery">
      <div className='h3-div'><h4>PHOTO GALLERY</h4></div> 
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`gallery-item ${!image.url ? 'placeholder' : ''}`}
          >
            {image.url && (
              <>
                <img src={image.url} alt={image.alt} />
                {image.overlay && (
                  <div
                    className={
                      image.isLogo ? 'overlay-logo' : 'overlay-text'
                    }
                  >
                    {image.overlay}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;