import React, { useState } from "react";

const OtherSkills = () => {
  //   let textContainer = document.getElementById("text-Container");
  //   const [theme, setTheme] = useState("lightTheme");
  //   const toggleTheme = (e) => {
  //     if (theme === "lightTheme") {
  //       setTheme("darkTheme");
  //       //   textContainer.addEventListener("mouseover", (event) => {
  //       //     event.stopPropagation();
  //       //   });
  //     } else {
  //       setTheme("lightTheme");
  //       //   textContainer.addEventListener("mouseover", (event) => {
  //       //     event.stopPropagation();
  //       //   });
  //     }
  //   };

  return (
    // <div className={`otherSkills ${theme}`} onMouseOver={toggleTheme}>
    <div className="otherSkills">
      <h3>Autres compétences</h3>

      <div className="list">
        <ul>
          <li>
            <i className="fas fa-check-square"></i>Anglais courant
          </li>
          <li>
            <i className="fas fa-check-square"></i>Github
          </li>
          <li>
            <i className="fas fa-check-square"></i>SEO
          </li>
          <li>
            <i className="fas fa-check-square"></i>Méthodes agiles
          </li>
        </ul>
        <ul>
          <li>
            <i className="fas fa-check-square"></i>Figma
          </li>
          <li>
            <i className="fas fa-check-square"></i>UI/UX Design
          </li>
          <li>
            <i className="fas fa-check-square"></i>Photoshop
          </li>
          <li>
            <i className="fas fa-check-square"></i>Montage vidéo
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
