import React from "react";
import "../css/Caurosel.css"; // Import your CSS


const CarouselComponent = () => {
  return (
    <div className="box">
      <div className="container">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
            ></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>

          {/* Carousel items */}
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              {/* Set a 4-second interval */}
              <img
                src="/images/ganesh.JPG"
                alt="Hindu Temple"
                className="d-block w-100 rounded"
             
              />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img
                src="/images/hindu_temple.JPG" // Ensure this path is correct
                alt="God 1"
                className="d-block w-100 rounded"
               
              />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img
                src="/images/seva.JPG" // Ensure this path is correct
                alt="God 2"
                className="d-block w-100 rounded"
               
              />
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
