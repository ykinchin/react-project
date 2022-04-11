import React, { useState, useEffect } from "react";
import { RiLoader2Line } from "react-icons/ri";

import "./styles/MenuPage.css";
import Title from "../../components/pageTitle/Title";
import menuImg1 from "./images/menuImg1.png";
import menuImg2 from "./images/menuImg2.png";
import "../../components/card/styles/Card.css";
import CardsBuild from "../../components/card/CardsBuild";

const MenuPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCard, setLoadedCard] = useState([]);

  fetch(
    "https://react-getting-started-115ca-default-rtdb.firebaseio.com/menu.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const arr = [];

      for (const key in data) {
        const ar = {
          id: key,
          ...data[key],
        };
        arr.push(ar);
      }
    });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-115ca-default-rtdb.firebaseio.com/menu.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cardItems = [];

        for (const key in data) {
          const cardItem = {
            id: key,
            ...data[key],
          };

          cardItems.push(cardItem);
        }

        setIsLoading(false);
        setLoadedCard(cardItems);
      });
  }, []);

  return (
    <section className="menu-section">
      <div className="menu__wrapper menu">
        <img className="menu__img-left img" src={menuImg2} alt="Our menu" />
        <img className="menu__img-right img" src={menuImg1} alt="Oure menu" />
        <div className="menu__title">
          <Title
            subtitle={"EXPLORE OUR SPECIAL BRAZILIAN MENU"}
            text={
              "Delve into our menu and savor the traditional flavors that our Brazilian steakhouse offers. Enjoy an unlimited and succulent variety of rotisserie-grilled meats, glazed pineapple, a gourmet salad bar, authentic Brazilian sides, and an experience like nowhere else."
            }
          />
        </div>
        {isLoading ? (
          <div>
            <section className="loading">
              <div>
                <p>
                  <RiLoader2Line />
                </p>
                <p>I'm loading!!!!</p>
              </div>
            </section>
          </div>
        ) : (
          <div>
            <div className="menu__cards">
              <CardsBuild cardItems={loadedCard} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuPage;
