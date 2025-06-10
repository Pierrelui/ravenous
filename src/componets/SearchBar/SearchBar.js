import React, { useState } from 'react';
import './SearchBar.css';
import { sortByOptions } from './SortOptions';

function SearchBar() {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  const handleSearch = () => {
    // 未來會呼叫 Yelp API，傳入 { term, location, sort_by: sortBy }
    console.log('Searching Yelp with:', { term, location, sort_by: sortBy });
  };

  const renderSortByOptions = () => {
    return Object.entries(sortByOptions).map(([label, value]) => (
      <li
        key={value}
        className={sortBy === value ? 'active' : ''}
        onClick={() => handleSortByChange(value)}
      >
        {label}
      </li>
    ));
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
