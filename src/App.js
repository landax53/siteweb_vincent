import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Formulaire from "./pages/Formulaire";
import PortFolio from "./pages/PortFolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Knowledges from "./pages/Knowledges";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/formulaire" exact element={<Formulaire />}></Route>
          <Route path="/competences" exact element={<Knowledges />}></Route>
          <Route path="/portfolio" exact element={<PortFolio />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
