import "./Sliders.scss";
import dataSlider from "./dataSlider";
import React, { useState } from "react";
function Slider3() {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider-second container-slider-second--big">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={`/img/im${index + 1}.png`} />
          </div>
        );
      })}
      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
export { Slider3 };
