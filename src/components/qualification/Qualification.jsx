import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Trayectoria</h2>
      <span className="section__subtitle">Mi camino</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">

          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educación
          </div>

        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ing. en Ciencia de Datos y Matemáticas</h3>
                <span className="qualification__subtitle">
                  Tecnológico de Monterrey
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Ago 2023 - Jun 2027 (Esperado)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bachillerato Internacional</h3>
                <span className="qualification__subtitle">
                  Prepa Tec Valle Alto
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Ago 2020 - Jun 2023
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Analista Financiero de Medio Tiempo</h3>
                <span className="qualification__subtitle">
                  SAGO 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jun 2024 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Pasante Administrativo</h3>
                <span className="qualification__subtitle">
                  Urbanizaciones Técnicas
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> May 2023 - Sep 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
