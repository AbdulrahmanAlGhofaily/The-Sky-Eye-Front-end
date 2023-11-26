import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import classes from "./NavItems.module.css";

const NavItems = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation().pathname.slice(1).toUpperCase();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div
      className={`${classes.navItems} ${navOpen ? classes.opened : ""} glassy`}
      onClick={toggleNav}
    >
      <div className={`${classes.navOperation}`}>
        <div className={`${classes.hamburger}`}>
          <span className={`${classes.line}`}></span>
          <span className={`${classes.line}`}></span>
          <span className={`${classes.line}`}></span>
        </div>
        <div className={`${classes.pageIndicator} glassy`}>
          <h3 className={`${classes.pageName}`}>
            {location === "" ? "HOME" : location === "ABOUTUS" ? "ABOUT US" : location}
          </h3>
        </div>
      </div>
      <div className={`${classes.navLinks} ${navOpen ? classes.navLinksOpened : ""}`}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/service">SERVICE</Link>
          </li>
          <li>
            <Link to="/aboutus">ABOUT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavItems;
