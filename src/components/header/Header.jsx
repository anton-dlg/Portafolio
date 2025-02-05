import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  /*=============== Change Background Header ===============*/
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const menuRef = useRef(null);

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        showMenu(false);
      }
    };

    if (Toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [Toggle]);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          AGT
        </a>

        <div ref={menuRef} className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i> Inicio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i> Trayectoria
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i> Habilidades
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Proyectos
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#footer"
                onClick={() => setActiveNav("#footer")}
                className={activeNav === "#footer" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-at nav__icon"></i> Redes
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
