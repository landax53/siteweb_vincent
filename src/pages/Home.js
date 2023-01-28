import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContent">
        <Navigation />
        <div className="content">
          <h1>Vincent LANDAIS</h1>
          <h2 className="titleProfession">
            Apprenti Développeur Front-end <br></br>& Illustrateur
          </h2>
          <div id="textIntro">
            <p>
              Halte là ! Tu es sur mon site contenant mes projets de
              développement web, si tu souhaites voir mes super beaux dessins
              c'est par ici :
            </p>
          </div>
          <a
            href="https://vincentlandaisillustration.fr"
            id="linkIllustrationWebSite"
          >
            vincentlandaisillustration.fr
          </a>
          <p id="textOutro">Sinon bonne continuation de visite ! </p>

          {/* <div className="pdf">
            <a href="./media/cv.pdf" target="_blank">
              Télécharger CV
            </a>
          </div> */}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
