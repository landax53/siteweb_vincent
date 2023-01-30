import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerbar">
      <div className="navigationFooterbar">
        <NavLink exact to="/" activeClassName="navActive">
          <span>Accueil</span>
        </NavLink>

        <NavLink exact to="/contact" activeClassName="navActive">
          <span>Contact</span>
        </NavLink>

        <NavLink exact to="/contact" activeClassName="navActive">
          <span>Politique de confidentialité</span>
        </NavLink>
      </div>
      {/* <div className="socialNetworkFooterbar">
        <ul>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>

        
      </div> */}
      <div className="signature">
        <p>
          Website & Illustrations by Vincent LANDAIS <br /> - All rights
          reserved - 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
