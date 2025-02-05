import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <h1 className="footer__title">AGT</h1>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/anton-de-la-garza-b842301a0/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/anton-dlg?tab=repositories"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="mailto:antondelagarza@gmail.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bx-envelope"></i>
          </a>
          <a
            href="https://wa.me/8121907884"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
