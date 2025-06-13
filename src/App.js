
import React, { useState } from 'react';
import './App.css';
import BusinessList from './componets/BusinessList/BusinessList';
import SearchBar from './componets/SearchBar/SearchBar';
import businessData from './mockData';

function App() {
  const [businesses, setBusinesses] = useState(businessData);

  const handleSearchResults = (newBusinessArray) => {
    setBusinesses(newBusinessArray);
  };

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar onSearchResults = {handleSearchResults}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
