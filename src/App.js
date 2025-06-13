import React, { useState } from 'react';
import './App.css';
import BusinessList from './componets/BusinessList/BusinessList';
import SearchBar from './componets/SearchBar/SearchBar';
import businessData from './mockData';

function App() {
  const [businesses, setBusinesses] = useState(businessData);

  // This will be called by SearchBar
  const searchYelp = (term, location, sortBy) => {
    console.log('Searching Yelp with:', term, location, sortBy);
    // For now, just load mock data
    setBusinesses(businessData);
  };


  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar onSearch = {searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
