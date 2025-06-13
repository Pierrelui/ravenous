// src/components/BusinessList/BusinessList.js
import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

function BusinessList({businesses}) {
  return (
    <div className="BusinessList">
      {businesses.map(biz => (
        <Business key={biz.id} business={biz} />
      ))}
    </div>
  );
}

export default BusinessList;
