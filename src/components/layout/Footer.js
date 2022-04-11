import React from "react";
import { BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";

import "./styles/Footer.css";
import logo from "./images/footerLogo.png";
import PageLinks from "./PageLinks";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <FooterItem
          class="footer__list"
          title={<img src={logo} alt="our logo" />}
          firstLink="www.company-name.com"
          secondLink="companyname@gmail.com"
          thirdLink="+7 281 29 38 22"
        />
        <PageLinks class="footer__list" />
        <FooterItem
          class="footer__list"
          title="Privecy"
          firstLink="Blog"
          secondLink="Investor Relations"
          thirdLink="Become an Affiliate"
        />
        <FooterItem
          class="footer__list"
          title="Our Socials"
          firstLink={<BsLinkedin />}
          secondLink={<BsInstagram />}
          thirdLink={<BsTelegram />}
        />
      </div>
    </footer>
  );
};

export default Footer;
