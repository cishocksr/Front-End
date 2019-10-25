import React from "react";
import { Link } from "react-router-dom";
import PlayerSearch from "./PlayerSearch";
// import "../App.css";

function SearchCard() {
  return (
    <div className="search-card">
      <nav>
        <h2 className="search-header">NBA Longevity</h2>
        <div className="nav-links">
          <l1 className="link" to="/">
            Home
          </l1>
        </div>
      </nav>
      <PlayerSearch />
    </div>
  );
}

export default SearchCard;
