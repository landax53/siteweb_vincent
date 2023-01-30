import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expériences</h3>
      <div className="exp-1">
        <h4>
          Site portfolio de mes illustration & boutique en ligne Wordpress
        </h4>
        <h4>2021</h4>
        <p>
          Dans le cadre de mon activité d'illustrateur, j'ai réalisé mon site
          sur le CMS Wordpress et lié une boutique en ligne gràce à l'extension
          WooCommerce. Mise en place d'une sauvegarde du backup automatique avec
          le plugin UpdraftPlus.
        </p>
      </div>
      <div className="exp-2">
        <h4>Etudiant développeur front-end - Digital Campus</h4>
        <h4>2022-2023</h4>
        <p>
          Suivi des cours en ligne "développeur front-end" avec la réalisation
          de nombreux projets pratiques
        </p>
        <ul>
          <li>
            - Environnement MERN : Mongo Express React Node <br />- Création
            d'une boutique en ligne{" "}
          </li>
          <li>- Jeux</li>
          <li>- ...</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
