import React from "react";
import classes from "./Navigation.module.css";

import Logo from "../Logo";
import NavItems from "./NavItems";

const Navigation = () => {
  return (
    <div className={`${classes.navLayout} ${classes.navLayout__sticky}`}>
      <Logo />
      <NavItems />
    </div>
  );
};

export default Navigation;
