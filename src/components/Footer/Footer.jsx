import React from "react";
import "./Footer.css";

const Footer = () => {
  const navigate = () => {
    window.open("https://ongch24014.github.io/portfolio/");
  };
  return (
    <footer>
      <span className="boxed" onClick={navigate}>
        Created by Chun Heng
      </span>
    </footer>
  );
};

export default Footer;
