
import React from 'react';
import './Business.css';

function Business({ business }) {
  return (
    <div className="Business">
      <div className="Business-image">
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2 className="Business-name">{business.name}</h2>
      <div className="Business-info">
        <p className="Business-address">
          {business.address}<br/>
          {business.city}, {business.state} {business.zipCode}
        </p>
        <p className="Business-category">{business.category}</p>
        <p className="Business-rating">
          {business.rating} stars ({business.reviewCount} reviews)
        </p>
      </div>
    </div>
  );
}

export default Business;
