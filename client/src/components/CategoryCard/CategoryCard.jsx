import React from 'react';
import './CategoryCard.css';

function CategoryCard({ children, onClick }) {
  return (
    <div className="category__card" onClick={onClick}>
      {children}
    </div>
  );
}

export default CategoryCard;
