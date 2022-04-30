import React, { useState } from "react";
import searchSvg from "../static/search-24px.svg";
import "./searchBar.css";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="searchBar">
      <div className="searchBarWrapper">
        <input
          className="inputField"
          placeholder="Search for username"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <img type="submit" src={searchSvg} alt="" className="searchImg" />
      </div>
    </div>
  );
}

export default SearchBar;
