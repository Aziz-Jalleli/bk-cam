import React, { useState } from 'react';
import './CategorySidebar.css';

const categories = [
  { title: 'Catégories', sub: ['catégories (311)'] },
  { title: 'Éclairage', sub: ['Éclairage (555)'] },
  { title: 'Photo', sub: ['photo (175)'] },
  { title: 'Trépieds', sub: ['Trépieds (80)'] },
  { title: 'Vidéo', sub: ['vidéo (62)'] },
];

const CategorySidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="category-sidebar">
        <div className='h3-div'><h4>Categories</h4></div>
      
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>
            <div className="category-title" onClick={() => toggleCategory(index)}>
              {cat.title}
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <ul className="subcategory">
                {cat.sub.map((subitem, i) => (
                  <li key={i}>{subitem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
