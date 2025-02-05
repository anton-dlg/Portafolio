import React, { useState } from "react";

const WorkItems = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.github} target="_blank" rel="noopener noreferrer" className="work__button">
        <i className="bx bxl-github work__button-icon"></i>
        Código
      </a>
      <button onClick={() => setShowModal(true)} className="work__button no-shadow">
        <i className="bx bxl-youtube work__button-icon"></i>
        Demo
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <span className="close-button" onClick={() => setShowModal(false)}>
            <i className="bx bx-x"></i>
          </span>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-container">
              {item.youtube ? (
                <iframe
                  src={item.youtube.replace("watch?v=", "embed/")}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={item.image} alt="Project Capture" className="modal-img" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkItems;