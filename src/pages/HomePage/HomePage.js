import React from "react";

import Button from "../../components/button/Button";
import Wrapper from "../../components/wrapper/Wrapper";
import AboutPage from "../AboutPage/AboutPage";
import FeaturesPage from "../FeaturesPage/FeaturesPage";
import Testimonials from "../Testimonials/Testimonials";
import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="main">
      <section className="home-section">
        <div className="home-section__wrapper home">
          <div className="home__content">
            <h1 className="home__content__title">
              Making time a good time by making food the good food.
            </h1>
            <p className="home__content__text">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment
            </p>
            <div className="home__content__buttons">
              <Button
                className="home__content__btn"
                path={"/menu"}
                text={"Order Now"}
              />
              <Button
                className="home__content__btn"
                path={"/"}
                text={"Food Details"}
              />
            </div>
          </div>
        </div>
      </section>
      <Wrapper>
        <FeaturesPage />
        <AboutPage />
        <Testimonials />
      </Wrapper>
    </div>
  );
};

export default HomePage;
