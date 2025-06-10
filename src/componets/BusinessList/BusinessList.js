// src/components/BusinessList/BusinessList.js
import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';
import businessData from '../../mockData';

function BusinessList() {
  return (
    <div className="BusinessList">
      {businessData.map(biz => (
        <Business key={biz.id} business={biz} />
      ))}
    </div>
  );
}

export default BusinessList;
