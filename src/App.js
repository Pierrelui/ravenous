
import React from 'react';
import './App.css';
import BusinessList from './componets/BusinessList/BusinessList';
import SearchBar from './componets/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
