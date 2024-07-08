import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
      value = {search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => setSearch(event.target.value)} 
      />
    </div>
  );
}

export default Search;