import React from "react";

function Search({searchTerm, onSearch, handleSearch}) {


  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submitted");
    handleSearch()
  }

  return (
    <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
