import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="#" class="brand-logo">
            GL
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Topics">Topics</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
