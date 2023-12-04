import React from "react";
import classes from "./Navigation.module.css";

import Logo from "../Logo";
import NavItems from "./NavItems";

const Navigation = () => {
  return (
    <nav className={`${classes.navLayout} ${classes.navLayout__sticky}`}>
      <Logo />
      <NavItems />
    </nav>
  );
};

export default Navigation;
