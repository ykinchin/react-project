import React, { useState } from "react";

import "./styles/TestimonialsSlider.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const TestimonialsSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  const slideItem = slides.map((slide, index) => {
    return (
      <div className="slide" key={slide.id}>
        {index === current && (
          <div className="slide__content">
            <div className="slide__content__wrapper">
                <img src={slide.img} alt="Client" />
                <div className="slide__content__wrapper__name">{slide.userName}</div>
            </div>
            <div className="slide__content__text">{slide.text}</div>
          </div>
        )}
      </div>
    );
  });

  return (
    <div>
      <section className="slider">
        <MdOutlineKeyboardArrowLeft
          className="slider__left-arrow slider__arr"
          onClick={prevSlide}
        />
        <div className="slide__wrapper">{slideItem}</div>
        <MdOutlineKeyboardArrowRight
          className="slider__right-arrow slider__arr"
          onClick={nextSlide}
        />
      </section>
    </div>
  );
};

export default TestimonialsSlider;
