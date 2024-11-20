import React, { useState } from "react";
import lemon from "../Images/chris-liverani-LAaquQl19UY-unsplash.jpg";
import image from "../Images/pexels-janetrangdoan-1128678.jpg";
import "../css/Carousel.css";

export  const Carousel = (props) => {
  let search =props.Search
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption">
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>props.setSearch(e.target.value)}
              />
              {/* <button className="search-button" type="submit">
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src={image}
              className="d-block w-100 carousel-image"
              alt="Random food image"
            />
          </div>
          <div className="carousel-item">
            <img
              src={lemon}
              className="d-block w-100 carousel-image"
              alt="Random drink image"
            />
          </div>
          <div className="carousel-item">
            <img
              src={image}
              className="d-block w-100 carousel-image"
              alt="Random fruit image"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
