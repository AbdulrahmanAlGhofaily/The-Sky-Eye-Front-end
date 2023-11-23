import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavItems.module.css";

const NavItems = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div
      className={`${classes.navItems} ${navOpen ? classes.opened : ""}`}
      onClick={toggleNav}
    >
      <div className={`${classes.navOperation}`}>
        <div className={`${classes.hamburger}`}>
          <span className={`${classes.line}`}></span>
          <span className={`${classes.line}`}></span>
          <span className={`${classes.line}`}></span>
        </div>
        <div className={`${classes.pageIndicator}`}>
          <h3 className={`${classes.pageName}`}>ABOUT US</h3>
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
