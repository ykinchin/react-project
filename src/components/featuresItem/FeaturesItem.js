import React from "react";

import { FEATURES_DATA } from "../data/FeaturesData";
import "./styles/FeaturesItem.css";


const FeaturesItem = () => {
  return (
    <div className="features-wrapper">
      {FEATURES_DATA.map((item) => (
        <div className="features__item" key={item.id}>
          <div className="features__item__img">
            <img src={item.img} alt="pic" />
          </div>
          <div className="features__item__title">{item.title}</div>
          <div className="features__item__text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesItem;
