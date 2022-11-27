import React from "react";
import "./Sliders.scss";
import leftArrow from "../public/img/left.png";
import rightArrow from "../public/img/right.png";

export default function Slbtn({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide1 next" : "btn-slide1 prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
export { Slbtn };
