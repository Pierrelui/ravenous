import React, { useState } from 'react';
import './SearchBar.css';

// Mapping of display labels → Yelp API `sort_by` values
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

function SearchBar({ onSearch }) {
  // ① track which sortBy is active
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  // ② Handlers for typing in the inputs
  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  // ③ Handler for clicking sort options
  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  // ④ Render the sort options with active styling
  const renderSortByOptions = () =>
    Object.entries(sortByOptions).map(([label, value]) => (
      <li
        key={value}
        className={sortBy === value ? 'active' : ''}
        onClick={() => handleSortByChange(value)}
      >
        {label}
      </li>
    ));

  // ⑤ When the button is clicked, lift state up
  const handleSearch = () => {
    onSearch(term, location, sortBy);
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        {/* term input */}
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
        />
        {/* location input */}
        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let’s Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
