import imageProject1 from "../media/charlescantin.JPG";
import imageProject2 from "../media/zenvoyage.JPG";
import imageProject3 from "../media/zenvoyage.JPG";
import imageProject4 from "../media/zenvoyage.JPG";
import imageProject5 from "../media/zenvoyage.JPG";
import imageProject6 from "../media/zenvoyage.JPG";

export const portfolioData = [
  {
    id: 1,
    name: "Site Vitrine Photographe",
    description:
      "Projet étudiant : Site vitrine Photographe avec React & Bdd CMS HeadLess STRAPI",
    languages: ["javascript", "css", "react"],
    languagesIcons: ["fab fa-js", "fab fa-css3-alt", "fab fa-react"],
    source: "https://github.com/landax53/charles-cantin-photographe",
    info: "Projet étudiant visant à créer un site web vitrine avec et une bdd avec le CMS HeadLess STRAPI. Il s'agit d'un site vitrine pour une agence de voyage fictive. Wireframe avec Balsamiq, à partir du repo distant créé sur GitHub, création dossier projet en local C:/xampp/htdocs. Modules Apache et MySQL sur XAMPP puis création bdd  (comptes admin et éditeur) et installation wordpress en local. ",
    picture: imageProject1,
  },

  {
    id: 2,
    name: "Zen Voyage",
    description:
      "Projet étudiant : Site vitrine avec CMS WordPress & Backend PHP",
    languages: ["javascript", "php", "css"],
    languagesIcons: ["fab fa-js", "fab fa-php", "fab fa-css3-alt"],
    source: "https://github.com/landax53/zenvoyage",
    info: "Projet étudiant visant à créer un site web avec le CMS Wordpress. Il s'agit d'un site vitrine pour une agence de voyage fictive. Wireframe avec Balsamiq, à partir du repo distant créé sur GitHub, création dossier projet en local C:/xampp/htdocs. Modules Apache et MySQL sur XAMPP puis création bdd  (comptes admin et éditeur) et installation wordpress en local. Réalisation du front à partir d'un modèle de thème sur wordpress.",
    picture: imageProject3,
  },
  {
    id: 3,
    name: "Site personnel",
    description:
      "Site personnel - vincentlandais.com présentant mes différents projets étudiant",
    languages: ["javascript", "react", "css"],
    languagesIcons: ["fa-brands fa-js", "fab fa-react", "fab fa-css3-alt"],
    source: "https://github.com/landax53/siteweb_vincent",
    info: "Site personnel publié en ligne présentant mes différents projets étudiant réalisés dans le cadre de ma formation développeur web front-end avec Digital Campus.",
    picture: imageProject2,
  },
  //   {
  //     id: 4,
  //     name: "laboriosam.fr",
  //     description: "Site vitrine - CMS WordPress - Backend PHP",
  //     languages: ["javascript", "php", "react"],
  //     languagesIcons: ["fab fa-js", "fab fa-php", "fab fa-react"],
  //     source: "http://www.github.com",
  //     info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
  //     picture: imageProject4,
  //   },
  //   {
  //     id: 5,
  //     name: "repudiante.com",
  //     description: "Site vitrine - CMS WordPress - Backend PHP",
  //     languages: ["javascript", "css"],
  //     languagesIcons: ["fab fa-js", "fab fa-css3-alt"],
  //     source: "http://www.github.com",
  //     info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
  //     picture: imageProject5,
  //   },
  //   {
  //     id: 6,
  //     name: "test.io",
  //     description: "Site vitrine - CMS WordPress - Backend PHP",
  //     languages: ["javascript", "react", "css"],
  //     languagesIcons: ["fab fa-js", "fab fa-react", "fab fa-css3-alt"],
  //     source: "http://www.github.com",
  //     info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
  //     picture: imageProject6,
  //   },
];
