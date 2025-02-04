import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section class="work section" id="portfolio">
      <h2 class="section__title">Proyectos</h2>
      <span class="section__subtitle">Mi trabajo reciente</span>

      <Works />
    </section>
  );
};

export default Work;
