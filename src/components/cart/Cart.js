import React from "react";
import Button from "../button/Button";

import "./styles/Cart.css";

const Cart = () => {
  return (
    <div className="cart-wrapper">
        1
      <div className="cart__btns">
          <Button path="/menu" text="Buy More" />
          <Button path="/menu" text="To Payment" />
      </div>
    </div>
  );
};

export default Cart;
