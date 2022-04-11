import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import '../featuresItem/styles/FeaturesItem.css'

const Slider = ({ slides }) => {
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
          <div className="features__item">
            <div className="features__item__img">
              <img src={slide.img} alt="pic" />
            </div>
            <div className="features__item__title">{slide.title}</div>
            <div className="features__item__text">{slide.text}</div>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="features-slider__wrapper">
      
      <div className="features-slider" onClick={nextSlide}><MdOutlineKeyboardArrowLeft
        className="slider__left-arrow slider__arr"
        onClick={prevSlide}
      />{slideItem}<MdOutlineKeyboardArrowRight
      className="slider__right-arrow slider__arr"
      onClick={nextSlide}
    /></div>
      
    </div>
  );
};

export default Slider;
