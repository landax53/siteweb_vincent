import React from "react";
import { NavLink } from "react-router-dom";
import idPhoto from "../media/moi_low.jpg";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <NavLink exact to="/" activeClassName="navActive">
            <img src={idPhoto} height="80px" alt="profil-pic" />

            <h3>Vincent LANDAIS</h3>
          </NavLink>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink exact to="/formulaire" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Formulaire</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/vincent-landais"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/landax53"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          {/* <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li> */}
          {/* <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
