import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./styles/Layout.css";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import Cart from "../cart/Cart";
import Modal from "../modal/Modal";

const Layout = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => setIsOpened(false);
  const onOpenHandler = () => setIsOpened(!isOpened);

  return (
    <div className="layout-wrapper">
      <div className="layout__nav">
        <MainNavigation />
        <div className={isOpened ? "layout__cart layout__cart-opened" : "layout__cart"}>
          <p>Cart</p>
          <AiOutlineShoppingCart onClick={onOpenHandler} />
        </div>
      </div>
      {isOpened ? <Cart /> : null}
      <main>{props.children}</main>
      <Footer />
      {isOpened ? <div onClick={onCloseHandler}><Modal/></div> : null}
    </div>
  );
};

export default Layout;
