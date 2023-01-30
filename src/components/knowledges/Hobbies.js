import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-pen"></i>
          <span>Dessin</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>VTT/Randonnée</span>
        </li>
        <li className="hobby">
          <i className="fas fa-landmark"></i>
          <span>Histoire/Art</span>
        </li>
        <li className="hobby">
          <i className="fas fa-atom"></i>
          <span>Science/Technologie</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
