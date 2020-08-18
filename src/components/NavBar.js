import React from "react";
import Search from "./Search.js";

function NavBar({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
     <div>
        <Search handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default NavBar;
