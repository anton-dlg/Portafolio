import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/anton-de-la-garza-b842301a0/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/anton-dlg"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="mailto:antondelagarza@gmail.com"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-envelope"></i>
      </a>

      <a
        href="wa.link/vj1gz0"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-whatsapp"></i>
      </a>
    </div>
  );
};

export default Social;
