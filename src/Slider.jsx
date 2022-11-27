import "./mainSlider.scss";
import Slbtn from "./btn";
import dataSlider from "./dataSlider";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <div className="container-slider1">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide1 active-anim1" : "slide1"
              }
            >
              <img src={`/img/Slide${index + 1}.png`} />
              <img src={`/img/Slide${index === 6 ? 6 : index + 2}.png`} />
              <img src={`/img/Slide${index === 5 ? 7 : index + 3}.png`} />
            </div>
          );
        })}
        <div className="media">
          <Slbtn moveSlide={nextSlide} direction={"next"} />
          <Slbtn moveSlide={prevSlide} direction={"prev"} />
        </div>
        <Link to="/works">
          <div className="myLink">Смотреть все работы</div>
        </Link>
      </div>
      <div className="wrapper"></div>
    </>
  );
}
export { Slider };
