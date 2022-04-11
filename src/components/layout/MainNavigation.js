import React from "react";

import "./styles/MainNavigation.css";
import logo from "./images/logo.jpg";
import PageLinks from "./PageLinks";

const MainNavigation = (props) => {
  return (
    <header className="header">
      <div className="navigation">
        <div className="navigation__bar">
          <div className="navigation__bar__logo">
            <img src={logo} alt="Food's logo" />
          </div>
          <PageLinks class="navigation__bar__items bar_items" />
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
