import React from "react";

import "./styles/Features.css";
import Title from "../../components/pageTitle/Title";
import FeaturesItem from "../../components/featuresItem/FeaturesItem";
import Slider from "../../components/slider/Slider";
import { FEATURES_DATA } from "../../components/data/FeaturesData";

const FeaturesPage = () => {
  const width = window.innerWidth;

  return (
    <section className="features-section">
      {width > 768 ? (
        <div className="features-wrapper features">
          <Title title={"Features"} subtitle={"Food with a New Passion"} />
          <div className="features__items">
            <FeaturesItem />
          </div>
        </div>
      ) : (
        <div>
          <Slider slides={FEATURES_DATA} />
        </div>
      )}
    </section>
  );
};

export default FeaturesPage;
