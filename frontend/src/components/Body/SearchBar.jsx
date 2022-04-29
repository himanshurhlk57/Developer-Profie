import React, { useState } from "react";
import searchSvg from "../static/search-24px.svg";
import "./searchBar.css";

function SearchBar({ users }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      window.alert("Please enter something");
    } else {
      setSearch("");
      console.group(search, users[0].id);
    }
  };

  return (
    <div className="searchBar">
      <div className="searchBarWrapper">
        <form onSubmit={handleSubmit}>
          <input
            className="inputField"
            placeholder="Search for username"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <img type="submit" src={searchSvg} alt="" className="searchImg" />
      </div>
    </div>
  );
}

export default SearchBar;
