import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div>
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
      </div>
      <img src={Logo} alt="" />
    </footer>
  );
}
